import React from "react";
import { Button, Container } from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "../../styles";
import FormValidator from "../../utils/FormValidator";
import AboutMd from "../../content/About.md";
import Markdown from "../markdown";

const About = props => {
  const { next } = props;

  const validator = new FormValidator([]);

  return (
    <Container style={styles.container}>
      <Markdown source={AboutMd} />

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
};

About.propTypes = {
  next: PropTypes.func
};

export default About;
