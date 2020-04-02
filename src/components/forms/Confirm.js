import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { formatDistance, format } from "date-fns";
import pt from "date-fns/locale/pt";
import PropTypes from "prop-types";
import Recaptcha from "react-recaptcha";

import styles from "../styles";

import api from "../../utils/ApiConfig";

const Confirm = props => {
  const [isVerified, setIsVerified] = useState(false);

  const { prev } = props;

  const {
    _name,
    _email,
    _deliveryDate,
    _message,
    _isAfterPandemic
  } = props.values;

  const deliveryDate = getDeliveryDate(_isAfterPandemic, _deliveryDate);

  const handleConfirm = () => {
    if (isVerified) {
      const formData = props.values;
      delete formData.validation;
      delete formData.step;
      formData.sent = false;
      formData._deliveryDate = format(formData._deliveryDate, "yyyy.MM.dd");
      sendFormData(formData);
      alert("Your form was submitted!");
    } else {
      alert("Please Verify!");
    }
  };

  const recaptchaVerifyHandler = response => {
    if (response) {
      setIsVerified(true);
    }
  };

  const recaptchaOnLoadHandler = () => {
    console.log("Recaptcha Loaded!");
  };

  return (
    <Container style={styles.container}>
      <Box style={styles.confirmText}>
        <Typography variant="body1" gutterBottom>
          <span style={styles.b}>{_name}</span>, sua carta será enviada:
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          Daqui a: <span style={styles.b}>{deliveryDate}</span>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Para o endereco de e-mail: <span style={styles.b}>{_email}</span>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Com a seguinte mensagem:
        </Typography>
        <Typography variant="body1" gutterBottom>
          <span style={styles.b}>{_message}</span>
        </Typography>
      </Box>

      <Box style={{ marginBottom: 35 }}>
        <Recaptcha
          sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
          render="explicit"
          verifyCallback={recaptchaVerifyHandler}
          onloadCallback={recaptchaOnLoadHandler}
        />
      </Box>

      <Box>
        <Button
          color="primary"
          variant="contained"
          style={{ marginRight: 20 }}
          onClick={prev}
        >
          Anterior
        </Button>
        <Button
          color="primary"
          variant="contained"
          style={styles.buttonConfirm}
          onClick={handleConfirm}
        >
          Confirmar
        </Button>
      </Box>
    </Container>
  );
};

async function sendFormData(formData) {
  const response = await api.post("save_message", formData);

  console.log(response.data.result);
}

function getDeliveryDate(isAfterPandemic, date) {
  let deliveryDate = "Logo após a pandemia do COVID acabar";

  if (!isAfterPandemic) {
    const dateInDistance = formatDistance(new Date(), date, {
      locale: pt
    });
    const formattedDate = format(date, "dd/MM/yy");

    deliveryDate = `${dateInDistance} (${formattedDate})`;
  }

  return deliveryDate;
}

Confirm.propTypes = {
  prev: PropTypes.func,
  values: PropTypes.object
};

export default Confirm;
