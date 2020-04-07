import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FutureForm from "./pages/FutureForm";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import PropTypes from "prop-types";

export default function Router(props) {
  return (
    <BrowserRouter>
      {props.header ? props.children : null}
      <Switch>
        <Route path="/" exact component={FutureForm} />
        <Route path="/privacidade" component={PrivacyPolicy} />
        <Route path="/termos" component={TermsOfUse} />
      </Switch>
      {props.footer ? props.children : null}
    </BrowserRouter>
  );
}

Router.propTypes = {
  header: PropTypes.bool,
  footer: PropTypes.bool,
  children: PropTypes.element
};
