import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "../styles";
import FormValidator from "../../helpers/FormValidator";

function About(props) {
  const { next } = props;

  const validator = new FormValidator([]);

  return (
    <Container style={styles.container}>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>

      <Button
        color="primary"
        variant="contained"
        style={styles.button}
        onClick={e => next(validator, e)}
      >
        Próximo
      </Button>
    </Container>
  );
}

About.propTypes = {
  next: PropTypes.func
};

export default About;
