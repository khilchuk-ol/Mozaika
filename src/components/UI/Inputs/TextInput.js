import React from "react";
import { Input } from "reactstrap";
import PropTypes from "prop-types";

import classes from "./TextInput.module.css";

function TextInput(props) {
  const { state, setState, validations, type, name, placeholder, className } =
    props;

  const onChangeValue = (e) => {
    for (let validate of validations) {
      const feedback = validate(e.target.value);

      if (feedback) {
        setState((prev) => ({
          ...prev,
          value: e.target.value,
          isValid: false,
          feedback: feedback,
        }));

        return;
      }

      setState((prev) => ({
        ...prev,
        value: e.target.value,
        isValid: true,
        feedback: null,
      }));
    }
  };

  return (
    <div className='form-group'>
      <Input
        type={type}
        className={`${classes.input} ${className} form-control`}
        name={name}
        placeholder={placeholder}
        value={state.value || ""}
        onChange={onChangeValue}
        invalid={!state.isValid}
      />
      {!state.isValid && state.feedback}
    </div>
  );
}

TextInput.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  validations: PropTypes.arrayOf(PropTypes.func),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default TextInput;
