import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <nav style={styles.footerLinks}>
        <Link style={styles.footerLink} to="/">
          Home
        </Link>
        <Link style={styles.footerLink} to="/termos">
          Termos de Uso
        </Link>
        <Link style={styles.footerLink} to="/privacidade">
          Políticas de Privacidade
        </Link>
      </nav>
    </footer>
  );
}
