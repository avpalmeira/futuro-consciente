import React from "react";
import { Box, Button, Container, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "./styles";
import FormValidator from "../helpers/FormValidator";
import MaskedInput from "react-text-mask";

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
        defaultValue={values._name}
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
        defaultValue={values._email}
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

function TelephoneMaskedInput(props) {
  const { inputRef, name, value, onChange, placeholder, ...other } = props;

  const telephoneMask = rawInput => {
    const stringSize = rawInput.length;

    if (stringSize <= 14) {
      return [
        "(",
        /[1-9]/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ];
    } else {
      return [
        "(",
        /[1-9]/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ];
    }
  };

  return (
    <MaskedInput
      {...other}
      placeholder={placeholder}
      showMask
      guide={false}
      onChange={onChange}
      name={name}
      value={value}
      mask={telephoneMask}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
    />
  );
}

TelephoneMaskedInput.propTypes = {
  inputRef: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

ContactInfo.propTypes = {
  next: PropTypes.func,
  prev: PropTypes.func,
  handleChange: PropTypes.func,
  values: PropTypes.object,
  validation: PropTypes.object
};

export default ContactInfo;
