import React from "react";
import { Box, Button, Container, TextField } from "@material-ui/core";
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
        label="Mensagem do Futuro"
        name="_message"
        onChange={handleChange}
        multiline
        rows="4"
        variant="outlined"
        defaultValue={values._message}
      />

      {validation._message && validation._message.message ? (
        <p style={styles.validationError}>{validation._message.message}</p>
      ) : null}

      <br />

      <TextField
        placeholder="Digite a data que deseja enviar a mensagem"
        label="Enviar na data"
        name="_deliveryDate"
        margin="normal"
        onChange={handleChange}
        defaultValue={values._deliveryDate}
      />

      {validation._deliveryDate && validation._deliveryDate.message ? (
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
