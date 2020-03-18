import React, { Component } from "react";
import About from "./About";
import ContactInfo from "./ContactInfo";
import FutureMessage from "./FutureMessage";
import Confirm from "./Confirm";

export class FutureForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,

      // form fields
      _name: "",
      _email: "",
      _telephone: "",
      _message: "",
      _deliveryDate: ""
    };

    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  nextStep() {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep() {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange(e) {
    const { name: fieldName, value } = e.target;

    this.setState({ [fieldName]: value });
  }

  render() {
    const { step, ...values } = this.state;

    switch (step) {
      case 1:
        return <About next={this.nextStep} />;
      case 2:
        return (
          <ContactInfo
            values={values}
            handleChange={this.handleChange}
            next={this.nextStep}
            prev={this.prevStep}
          />
        );
      case 3:
        return (
          <FutureMessage
            values={values}
            handleChange={this.handleChange}
            next={this.nextStep}
            prev={this.prevStep}
          />
        );
      case 4:
        return <Confirm values={values} prev={this.prevStep} />;
      default:
        this.setState({ step: 1 });

        return <About next={this.nextStep} />;
    }
  }
}

export default FutureForm;
