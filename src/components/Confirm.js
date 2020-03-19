import React from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "./styles";

function Confirm(props) {
  const { prev } = props;

  return (
    <Container style={styles.container}>
      <Typography variant="body1" gutterBottom>
        Suas informacoes: ... ... ...
      </Typography>

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
        >
          Confirmar
        </Button>
      </Box>
    </Container>
  );
}

Confirm.propTypes = {
  prev: PropTypes.func
};

export default Confirm;
