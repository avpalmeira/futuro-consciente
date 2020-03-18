import React from "react";
import FutureForm from "./components/FutureForm";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { AppBar, Typography } from "@material-ui/core";

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Typography variant="h5" style={{ textAlign: "center" }}>
          APP&apos;s LOGO
        </Typography>
      </AppBar>

      <FutureForm />
    </ThemeProvider>
  );
};

export default App;
