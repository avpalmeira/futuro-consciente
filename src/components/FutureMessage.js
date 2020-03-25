import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Grid,
  Typography,
  Switch
} from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "./styles";
import FormValidator from "../helpers/FormValidator";

function FutureMessage(props) {
  const { next, prev, values, handleChange, validation } = props;

  const validator = new FormValidator([
    {
      field: "_message",
      method: "isEmpty",
      validWhen: false,
      message: "A mensagem é obrigatória"
    },
    {
      field: "_deliveryDate",
      method: "isEmpty",
      validWhen: false,
      message: "A data é obrigatória"
    }
  ]);

  return (
    <Container style={styles.container}>
      <TextField
        placeholder="Escreva sua mensagem"
        label="Mensagem para voce do Futuro"
        name="_message"
        onChange={handleChange}
        multiline
        rows="3"
        variant="outlined"
        defaultValue={values._message}
      />

      {validation._message && validation._message.isInvalid ? (
        <p style={styles.validationError}>{validation._message.message}</p>
      ) : null}

      <br />

      <Grid container spacing={2} style={{ marginTop: 20, marginBottom: 20 }}>
        <Grid
          item
          sm={6}
          xs={9}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>
            Deseja que a mensagem seja enviada após o surto do COVID-19?
          </Typography>
        </Grid>
        <Grid
          item
          sm={6}
          xs={3}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Switch
            checked={true}
            color="primary"
            name="checkedButton"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <Typography style={{ marginLeft: 10 }}>Sim</Typography>
        </Grid>
      </Grid>

      <br />

      <Grid container spacing={2} style={{ marginBottom: 20 }}>
        <Grid
          item
          sm={6}
          xs={9}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Ou deseja enviar na seguinte data:</Typography>
        </Grid>
        <Grid item sm={6} xs={3}>
          <TextField
            placeholder="Insira a data de envio"
            name="_deliveryDate"
            style={{ marginLeft: 10 }}
            onChange={handleChange}
            defaultValue={values._deliveryDate}
          />
        </Grid>
      </Grid>

      {validation._deliveryDate && validation._deliveryDate.isInvalid ? (
        <p style={styles.validationError}>{validation._deliveryDate.message}</p>
      ) : null}

      <br />

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
          onClick={e => next(validator, e)}
        >
          Próximo
        </Button>
      </Box>
    </Container>
  );
}

FutureMessage.propTypes = {
  next: PropTypes.func,
  prev: PropTypes.func,
  handleChange: PropTypes.func,
  values: PropTypes.object,
  validation: PropTypes.object
};

export default FutureMessage;
