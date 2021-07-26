import PropTypes from "prop-types";
import { useRef, useState } from "react";

import classes from "./DropDownSelector.module.css";

const DropDownSelector = (props) => {
  const [selected, setSelected] = useState(props.initialValue);
  const selectRef = useRef();

  const handleChange = () => {
    const val = selectRef.current.value;

    if (val === selected) {
      return;
    }

    props.onSelect(val);
    setSelected(val);
  };

  return (
    <select
      className={`${props.className} ${classes.drpdwn}`}
      name='lang'
      id='lang'
      value={selected}
      onChange={handleChange}
      ref={selectRef}>
      {props.options.map((str) => (
        <option value={str} key={str}>
          {str}
        </option>
      ))}
    </select>
  );
};

DropDownSelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  initialValue: PropTypes.string.isRequired,
};

export default DropDownSelector;
