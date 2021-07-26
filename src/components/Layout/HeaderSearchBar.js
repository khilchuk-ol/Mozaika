import { useRef } from "react";
import PropTypes from "prop-types";

import classes from "./HeaderSearchBar.module.css";

const HeaderSearchBar = (props) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const query = inputRef.current.value?.trim();
    inputRef.current.value = null;

    if (!query) {
      return;
    }

    props.onSearch(query);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className={classes["searchbar-container"]}>
      <input
        className={classes.searchbar}
        type='text'
        placeholder='Search...'
        ref={inputRef}
        onKeyUp={handleKeyUp}
      />
      <span className={classes["search-img"]} onClick={handleSearch}>
        <img src='./img/grey-search.png' alt='' />
      </span>
    </div>
  );
};

HeaderSearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default HeaderSearchBar;
