import React from "react";
import FutureForm from "./components/forms/FutureForm";
import { useTheme } from "@material-ui/core/styles";

const App = () => {
  const theme = useTheme();

  return <FutureForm theme={theme} />;
};

export default App;
