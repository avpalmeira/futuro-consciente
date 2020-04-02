import React from "react";
import { useTheme, ThemeProvider } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import styles from "./styles";
import logo from "./assets/logo.png";
import FutureForm from "./pages/FutureForm";

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
