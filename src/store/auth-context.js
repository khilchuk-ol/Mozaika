import { createContext, useState, useCallback } from "react";
import useCookies from "../hooks/use-cookies";

const INIT_STATE = {
  isLoggedIn: false,
  token: null,
  login: (token, user) => {},
  logout: () => {},
};

const AuthContext = createContext(INIT_STATE);

export const AuthContextProvider = (props) => {
  const [getCookies, setCookies, deleteCookies] = useCookies();

  const getToken = useCallback(() => {
    const user = getCookies("user");
    if (!user) {
      return null;
    }

    //ask for new token from server; if login is not successfull - delete cookie; else - return token
  }, [getCookies]);

  const initToken = getToken();

  const isLoggedIn = !!initToken;
  const [token, setToken] = useState(initToken);

  const loginHandler = (token, user) => {
    setToken(token);
    setCookies("user", user);
  };

  const logoutHandler = () => {
    setToken(null);
    deleteCookies("user");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        login: loginHandler,
        logout: logoutHandler,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
