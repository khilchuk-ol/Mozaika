import { Fragment, useContext } from "react";
import { useHistory } from "react-router";

import classes from "./Header.module.css";
import HeaderSearchBar from "./HeaderSearchBar";
import AuthContext from "../../store/auth-context";
import SettingsContext from "../../store/settings-context";
import RoundedButton from "../UI/RoundedButton";
import DropDownSelector from "../UI/DropDownSelector";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const settingsCtx = useContext(SettingsContext);

  const history = useHistory();

  const search = (str) => {
    console.log(str);
  };

  const handleLangSelect = (str) => {
    if (!str) {
      return;
    }

    settingsCtx.changeLang(str);
  };

  const onClickLogin = () => {
    history.push("/login");
  };

  const onClickSignup = () => {
    history.push("/signup");
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
            className='text-colored'
            onSelect={handleLangSelect}
          />
          {authCtx.isLoggedIn ? (
            <p>logged</p>
          ) : (
            <Fragment>
              <RoundedButton
                text='Sign up'
                className='intensive-button'
                onClick={onClickSignup}
              />
              <RoundedButton
                text='Log in'
                className='light-button'
                onClick={onClickLogin}
              />
            </Fragment>
          )}
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
