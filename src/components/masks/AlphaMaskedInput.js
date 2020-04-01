import React from "react";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";

function AlphaMaskedInput(props) {
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
      mask={alphaMask}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
    />
  );
}

function alphaMask() {
  const alphaChar = /[a-zA-Záãâéêíóõôúç ]/;
  const mask = [];

  // it must begin with a alphabetic char
  mask.push(/[a-zA-Z]/);

  // limit the number of chars to 50
  for (let i = 1; i <= 50; i++) {
    mask.push(alphaChar);
  }

  return mask;
}

AlphaMaskedInput.propTypes = {
  inputRef: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default AlphaMaskedInput;
