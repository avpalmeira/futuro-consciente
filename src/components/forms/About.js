import React from "react";
import { Button, Container } from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "../../styles";
import AboutMd from "../../content/About.md";
import Markdown from "../markdown";

const About = props => {
  const { next } = props;

  return (
    <Container style={styles.container}>
      <Markdown source={AboutMd} />

      <div style={styles.buttons}>
        <Button
          color="primary"
          variant="contained"
          style={styles.button}
          onClick={next}
        >
          Próximo
        </Button>
      </div>
    </Container>
  );
};

About.propTypes = {
  next: PropTypes.func
};

export default About;
