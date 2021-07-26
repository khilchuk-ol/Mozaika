import PropTypes from "prop-types";

import classes from "./RoundedButton.module.css";

const RoundedButton = (props) => {
  return (
    <button className={`${props.className} ${classes["rounded-button"]}`}>
      {props.text}
    </button>
  );
};

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default RoundedButton;
