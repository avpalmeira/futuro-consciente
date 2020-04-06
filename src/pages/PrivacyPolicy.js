import React from "react";
import Container from "@material-ui/core/Container";
import Markdown from "../components/markdown";
import PrivacyPolicyMd from "../content/PrivacyPolicy.md";
import styles from "../styles";

export default function PrivacyPolicy() {
  return (
    <Container style={styles.container}>
      <Markdown source={PrivacyPolicyMd} />
    </Container>
  );
}
