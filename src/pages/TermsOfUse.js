import React from "react";
import Container from "@material-ui/core/Container";
import Markdown from "../components/markdown";
import TermsOfUseMd from "../content/TermsOfUse.md";
import styles from "../styles";

export default function TermsOfUse() {
  return (
    <Container style={styles.container}>
      <Markdown source={TermsOfUseMd} />
    </Container>
  );
}
