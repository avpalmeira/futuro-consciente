import React from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { formatDistance, format } from "date-fns";
import pt from "date-fns/locale/pt";
import PropTypes from "prop-types";
import styles from "../styles";

function Confirm(props) {
  const { prev } = props;
  const {
    _name,
    _email,
    _deliveryDate,
    _message,
    _isAfterPandemic
  } = props.values;

  let deliveryDate = "Logo após a pandemia do COVID acabar";

  if (!_isAfterPandemic) {
    const dateInDistance = formatDistance(new Date(), _deliveryDate, {
      locale: pt
    });
    const formattedDate = format(_deliveryDate, "dd/MM/yy");

    deliveryDate = `${dateInDistance} (${formattedDate})`;
  }

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
}

function handleConfirm() {
  alert("Your form was submitted!");
}

Confirm.propTypes = {
  prev: PropTypes.func,
  values: PropTypes.object
};

export default Confirm;
