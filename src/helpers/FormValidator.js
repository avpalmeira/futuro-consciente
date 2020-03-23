import validator from "validator";

class FormValidator {
  constructor(validations) {
    // validations is an array of validation rules specific to a form
    this.validations = validations;
  }

  validate(values) {
    // assume the result is valid
    const validation = this.valid();

    this.validations.forEach(rule => {
      // only update validation if it was not marked invalid earlier
      if (!validation[rule.field].isInvalid) {
        const fieldValue = values[rule.field].toString();
        const args = rule.args || [];
        const validationMethod = validator[rule.method];

        // if the result of the validator method does not match expectation (validWhen)
        if (validationMethod(fieldValue, ...args, values) !== rule.validWhen) {
          // modify the field to invalid and set whole validation to invalid
          validation[rule.field] = { isInvalid: true, message: rule.message };
          validation.isValid = false;
        }
      }
    });

    return validation;
  }

  valid() {
    const validation = {};

    this.validations.map(
      rule => (validation[rule.field] = { isInvalid: false, message: "" })
    );
    return { isValid: true, ...validation };
  }
}

export default FormValidator;
