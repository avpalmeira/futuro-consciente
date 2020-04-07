import React, { Component } from "react";
import { Tabs, Tab, Box } from "@material-ui/core";
import { addWeeks } from "date-fns";
import {
  About,
  Confirm,
  ContactInfo,
  FutureMessage
} from "../components/forms";
import ThankYou from "./ThankYou";
import validators from "../validators";
import styles from "../styles";

export class FutureForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      wasFormSent: false,
      validation: {},

      // form fields
      _name: "",
      _email: "",
      _telephone: "",
      _message: "",
      _deliveryDate: addWeeks(new Date(), 1),
      _isAfterPandemic: false
    };

    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleNavigationChange = this.handleNavigationChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleConfirmation = this.handleConfirmation.bind(this);
    this.checkFormValidation = this.checkFormValidation.bind(this);
  }

  nextStep() {
    const { step } = this.state;

    // only if inputs are valid go to next step
    if (this.checkFormValidation()) {
      const nextStep = step + 1;

      this.setState({
        step: nextStep
      });
    }
  }

  prevStep() {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleNavigationChange(_, newValue) {
    // if a previous step is selected allow it to navigate,
    // if a next step is selected then check for validation
    const allowNavigationChange =
      newValue < this.state.step ? true : this.checkFormValidation();

    if (allowNavigationChange) {
      this.setState({
        step: newValue
      });
    }
  }

  handleInputChange(date, e) {
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

  checkFormValidation() {
    // get form validator based on ingorable validation and current step
    const formValidators = validators(this.state._isAfterPandemic);
    const validator = formValidators[this.state.step - 1];

    if (!validator) {
      return true;
    }

    const validation = validator.validate(this.state);
    this.setState({ validation });

    return validation && validation.isValid;
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
              handleChange={this.handleInputChange}
              next={this.nextStep}
              prev={this.prevStep}
            />
          );
          break;
        case 3:
          currentTab = (
            <FutureMessage
              values={values}
              handleChange={this.handleInputChange}
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
        {!wasFormSent && (
          <Box style={styles.tabsWrapper}>
            <Tabs
              value={step}
              onChange={this.handleNavigationChange}
              aria-label="form steps tabs"
            >
              <Tab value={1} label="Sobre" />
              <Tab value={2} label="Contato" />
              <Tab value={3} label="Mensagem" />
              <Tab value={4} label="Confirmacao" />
            </Tabs>
          </Box>
        )}

        {currentTab}
      </Box>
    );
  }
}

export default FutureForm;
