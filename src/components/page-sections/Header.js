import React from "react";
import { AppBar } from "@material-ui/core";
import styles from "../../styles";
import logo from "../../content/logo.png";

export default function Header() {
  return (
    <AppBar style={styles.appBar} position="static">
      <img alt="" src={logo} style={styles.logo} />
    </AppBar>
  );
}
