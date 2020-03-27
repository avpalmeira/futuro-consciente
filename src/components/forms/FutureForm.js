import React, { Component } from "react";
import { AppBar, Tabs, Tab, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { addDays } from "date-fns";

import About from "./About";
import ContactInfo from "./ContactInfo";
import FutureMessage from "./FutureMessage";
import Confirm from "./Confirm";
import styles from "../styles";
import logo from "../../assets/logo.png";
import FormValidator from "../../helpers/FormValidator";

export class FutureForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      validation: new FormValidator([]).valid(),

      // form fields
      _name: "",
      _email: "",
      _telephone: "",
      _message: "",
      _deliveryDate: addDays(new Date(), 1),
      _isAfterPandemic: false
    };

    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // validator is a FormValidator object
  nextStep(validator) {
    const { step } = this.state;

    // check validation of form and update validation state
    const validation = validator.validate(this.state);
    this.setState({ validation });

    // only if inputs are valid go to next step
    if (validation && validation.isValid) {
      this.setState({
        step: step + 1
      });
    }
  }

  prevStep() {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange(date, e) {
    if (date) {
      this.setState({ _deliveryDate: date });
      return;
    }

    if (e) {
      let { name: fieldName, value, checked } = e.target;

      if (fieldName === "_isAfterPandemic") {
        value = checked;
      }

      this.setState({ [fieldName]: value });
    }
  }

  render() {
    const { step, ...values } = this.state;
    const { theme } = this.props;
    let currentTab;

    switch (step) {
      case 1:
        currentTab = <About next={this.nextStep} />;
        break;
      case 2:
        currentTab = (
          <ContactInfo
            values={values}
            handleChange={this.handleChange}
            validation={this.state.validation}
            next={this.nextStep}
            prev={this.prevStep}
          />
        );
        break;
      case 3:
        currentTab = (
          <FutureMessage
            values={values}
            handleChange={this.handleChange}
            validation={this.state.validation}
            next={this.nextStep}
            prev={this.prevStep}
          />
        );
        break;
      case 4:
        currentTab = <Confirm values={values} prev={this.prevStep} />;
        break;
      default:
        this.setState({ step: 1 });
        currentTab = <About next={this.nextStep} />;
    }
    return (
      <ThemeProvider theme={theme}>
        <AppBar style={styles.appBar} position="static">
          <img alt="" src={logo} style={styles.logo} />
        </AppBar>

        <Box style={styles.tabsWrapper}>
          <Tabs value={step - 1} aria-label="form steps tabs">
            <Tab label="Sobre" />
            <Tab label="Contato" />
            <Tab label="Mensagem" />
            <Tab label="Confirmacao" />
          </Tabs>
        </Box>

        {currentTab}
      </ThemeProvider>
    );
  }
}

FutureForm.propTypes = {
  theme: PropTypes.object
};

export default FutureForm;
