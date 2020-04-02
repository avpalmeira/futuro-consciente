import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";
import styles from "../../styles";

export default class ThankYou extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Typography variant="body1" style={styles.thankYouTitle} gutterBottom>
          Thank You
        </Typography>
      </Container>
    );
  }
}
