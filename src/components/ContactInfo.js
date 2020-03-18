import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "./styles";

function ContactInfo(props) {
  const { next, prev, values, handleChange } = props;

  return (
    <Container style={styles.container}>
      <Typography variant="h4" style={styles.title}>
        Informacoes de Contato
      </Typography>

      <TextField
        placeholder="Digite seu nome"
        label="Seu nome"
        name="_name"
        margin="normal"
        onChange={handleChange}
        defaultValue={values._name}
      />
      <br />

      <TextField
        placeholder="Digite seu email"
        label="Seu email"
        name="_email"
        margin="normal"
        onChange={handleChange}
        defaultValue={values._email}
      />
      <br />

      <TextField
        placeholder="Digite seu telefone"
        label="Seu telefone"
        name="_telephone"
        margin="normal"
        onChange={handleChange}
        defaultValue={values._telephone}
      />
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

        <Button color="primary" variant="contained" onClick={next}>
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
  values: PropTypes.object
};

export default ContactInfo;
