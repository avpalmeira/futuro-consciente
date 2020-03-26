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
        const field = values[rule.field];
        const args = rule.args || [];
        // if value is a Date, dont change it to string
        const fieldValue = field instanceof Date ? field : field.toString();
        // the method can be passed as a string which represents a validator method
        // or as a function which returns true or false
        const validationMethod =
          typeof rule.method === "string"
            ? validator[rule.method]
            : rule.method;

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

  static isValidDate(date, ...args) {
    const { _isAfterPandemic } = args[0];

    const checkDate =
      date &&
      !isNaN(date) &&
      Object.prototype.toString.call(date) === "[object Date]";
    return _isAfterPandemic || checkDate;
  }
}

export default FormValidator;
