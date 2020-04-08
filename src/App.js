import React from "react";
import { useTheme, ThemeProvider } from "@material-ui/core/styles";
import { Header, Footer } from "./components/page-sections";
import SocialNetworkMetatags from "./components/metatags";
import Router from "./Router";
import styles from "./styles";

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div style={styles.pageContent}>
        <Header />
        <SocialNetworkMetatags />

        <Router footer>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
