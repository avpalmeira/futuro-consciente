import React from "react";
import { useTheme, ThemeProvider } from "@material-ui/core/styles";
import { Header, Footer } from "./components/page-sections";
import SocialNetworkMetatags from "./components/metatags";
import Router from "./Router";

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SocialNetworkMetatags />

      <Router footer>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
