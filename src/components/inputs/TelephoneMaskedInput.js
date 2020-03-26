import React from "react";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";

function TelephoneMaskedInput(props) {
  const { inputRef, name, value, onChange, placeholder, ...other } = props;

  return (
    <MaskedInput
      {...other}
      placeholder={placeholder}
      showMask
      guide={false}
      onChange={onChange}
      name={name}
      value={value}
      mask={telephoneMask}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
    />
  );
}

function telephoneMask(rawInput) {
  const stringSize = rawInput.length;
  const digit = /\d/;
  const mask = [];
  let pushedExtraDigit = false;

  // generate mask array
  mask.push("(");
  mask.push(/[1-9]/);
  mask.push(digit);
  mask.push(")");
  mask.push(" ");

  for (let i = 1; i <= 8; i++) {
    mask.push(digit);

    if (!pushedExtraDigit && stringSize > 14) {
      mask.push(digit);
      pushedExtraDigit = true;
    }

    if (i === 4) {
      mask.push("-");
    }
  }
  return mask;
}

TelephoneMaskedInput.propTypes = {
  inputRef: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default TelephoneMaskedInput;
