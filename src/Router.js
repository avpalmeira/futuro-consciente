import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FutureForm from "./pages/FutureForm";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FutureForm} />
        <Route path="/privacidade" component={PrivacyPolicy} />
      </Switch>
    </BrowserRouter>
  );
}
