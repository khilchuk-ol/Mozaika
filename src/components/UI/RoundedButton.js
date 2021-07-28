import PropTypes from "prop-types";

import classes from "./RoundedButton.module.css";

const RoundedButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className} ${classes["rounded-button"]}`}>
      {props.text}
    </button>
  );
};

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default RoundedButton;
