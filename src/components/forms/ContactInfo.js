import React from "react";
import { Box, Button, Container, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "../styles";
import { TelephoneMaskedInput, AlphaMaskedInput } from "../masks";
import FormValidator from "../../utils/FormValidator";

function ContactInfo(props) {
  const { next, prev, values, handleChange, validation } = props;

  const validator = new FormValidator([
    {
      field: "_name",
      method: "isEmpty",
      validWhen: false,
      message: "Nome é obrigatório"
    },
    {
      field: "_email",
      method: "isEmpty",
      validWhen: false,
      message: "Email é obrigatório"
    },
    {
      field: "_email",
      method: "isEmail",
      validWhen: true,
      message: "Este não é um email válido"
    },
    {
      field: "_telephone",
      method: "isEmpty",
      validWhen: false,
      message: "Telefone é obrigatório"
    },
    {
      field: "_telephone",
      method: "isLength",
      validWhen: true,
      args: [{ min: 14, max: 15 }],
      message: "Este não é um telefone válido"
    }
  ]);

  return (
    <Container style={styles.container}>
      <TextField
        placeholder="Digite seu nome"
        label="Seu nome"
        name="_name"
        margin="normal"
        onChange={e => handleChange(null, e)}
        value={values._name}
        InputProps={{ inputComponent: AlphaMaskedInput }}
      />

      {validation._name && validation._name.isInvalid ? (
        <p style={styles.validationError}>{validation._name.message}</p>
      ) : null}

      <br />

      <TextField
        placeholder="Digite seu email"
        label="Seu email"
        name="_email"
        margin="normal"
        onChange={e => handleChange(null, e)}
        value={values._email}
      />

      {validation._email && validation._email.isInvalid ? (
        <p style={styles.validationError}>{validation._email.message}</p>
      ) : null}

      <br />

      <TextField
        label="Seu telefone"
        placeholder="Digite seu telefone"
        name="_telephone"
        margin="normal"
        value={values._telephone}
        onChange={e => handleChange(null, e)}
        InputProps={{ inputComponent: TelephoneMaskedInput }}
      />

      {validation._telephone && validation._telephone.isInvalid ? (
        <p style={styles.validationError}>{validation._telephone.message}</p>
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

ContactInfo.propTypes = {
  next: PropTypes.func,
  prev: PropTypes.func,
  handleChange: PropTypes.func,
  values: PropTypes.object,
  validation: PropTypes.object
};

export default ContactInfo;
