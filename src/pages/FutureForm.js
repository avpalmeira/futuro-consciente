import React, { Component } from "react";
import { Tabs, Tab, Box } from "@material-ui/core";
import { addDays } from "date-fns";

import {
  About,
  Confirm,
  ContactInfo,
  FutureMessage
} from "../components/forms";
import ThankYou from "./ThankYou";
import FormValidator from "../utils/FormValidator";
import styles from "../styles";

export class FutureForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      wasFormSent: false,
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
    this.handleConfirmation = this.handleConfirmation.bind(this);
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

  handleConfirmation() {
    this.setState({ wasFormSent: true });
  }

  render() {
    const { step, wasFormSent, ...values } = this.state;
    let currentTab = <ThankYou values={values} />;

    if (!wasFormSent) {
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
          currentTab = (
            <Confirm
              values={values}
              prev={this.prevStep}
              onConfirmation={this.handleConfirmation}
            />
          );
          break;
        default:
          this.setState({ step: 1 });
          currentTab = <About next={this.nextStep} />;
      }
    }
    return (
      <Box>
        {!this.state.wasFormSent && (
          <Box style={styles.tabsWrapper}>
            <Tabs value={step - 1} aria-label="form steps tabs">
              <Tab label="Sobre" />
              <Tab label="Contato" />
              <Tab label="Mensagem" />
              <Tab label="Confirmacao" />
            </Tabs>
          </Box>
        )}

        {currentTab}
      </Box>
    );
  }
}

export default FutureForm;
