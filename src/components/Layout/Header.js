import { Fragment, useContext } from "react";

import classes from "./Header.module.css";
import HeaderSearchBar from "./HeaderSearchBar";
import AuthContext from "../../store/auth-context";
import SettingsContext from "../../store/settings-context";
import RoundedButton from "../UI/RoundedButton";
import DropDownSelector from "../UI/DropDownSelector";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const settingsCtx = useContext(SettingsContext);

  const search = (str) => {
    console.log(str);
  };

  const handleLangSelect = (str) => {
    if (!str) {
      return;
    }

    settingsCtx.changeLang(str);
  };

  return (
    <Fragment>
      <header className={`header ${classes.header}`}>
        <h1>Mozaїka</h1>
        <HeaderSearchBar onSearch={search} />
        <div className={classes["right-group"]}>
          <DropDownSelector
            options={settingsCtx.languages}
            initialValue={settingsCtx.lang}
            className=''
            onSelect={handleLangSelect}
          />
          {authCtx.isLoggedIn ? (
            <p>logged</p>
          ) : (
            <Fragment>
              <RoundedButton text='Sign up' className='intensive-button' />
              <RoundedButton text='Log in' className='light-button' />
            </Fragment>
          )}
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
