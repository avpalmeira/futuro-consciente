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

function FutureMessage(props) {
  const { next, prev, values, handleChange } = props;

  return (
    <Container style={styles.container}>
      <Typography variant="h4" style={styles.title}>
        Mensagem
      </Typography>

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

      <br />

      <TextField
        placeholder="Digite a data que deseja enviar a mensagem"
        label="Enviar na data"
        name="_deliveryDate"
        margin="normal"
        onChange={handleChange}
        defaultValue={values._deliveryDate}
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

FutureMessage.propTypes = {
  next: PropTypes.func,
  prev: PropTypes.func,
  handleChange: PropTypes.func,
  values: PropTypes.object
};

export default FutureMessage;
