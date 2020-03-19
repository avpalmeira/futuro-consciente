import React from "react";
import FutureForm from "./components/FutureForm";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import styles from "./components/styles";
import logo from "./assets/logo.png";

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppBar style={styles.appBar} position="static">
        <img alt="" src={logo} style={styles.logo} />
      </AppBar>

      <FutureForm />
    </ThemeProvider>
  );
};

export default App;
