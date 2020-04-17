import React from "react";
import { AppBar } from "@material-ui/core";
import styles from "../../styles";
import logo from "../../content/logo.png";

export default function Header() {
  return (
    <AppBar style={styles.appBar} position="static">
      <div style={styles.logo}>
        <img alt="" src={logo} />
        <div style={styles.logoText}>
          <span style={styles.logoTextSm}>Futuro</span>
          <span style={styles.logoTextLg}>Consciente</span>
        </div>
      </div>
    </AppBar>
  );
}
