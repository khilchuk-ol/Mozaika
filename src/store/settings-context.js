import { createContext, useEffect, useState } from "react";

import themes from "../themes/data";

const INIT_STATE = {
  theme: "default",
  themeFile: "",
  lang: "en-US",
  setTheme: (theme) => {},
  setLang: (lang) => {},
};

const SettingsContext = createContext(INIT_STATE);

export const SettingsContextProvider = (props) => {
  const [theme, setTheme] = useState("default");
  const [themeFile, setThemeFile] = useState("");
  const [lang, setLang] = useState("en-US");

  useEffect(() => {
    const found = themes[theme];

    if (!found) {
      console.error("Theme not found!!");
    } else {
      setThemeFile(found);
    }
  }, [theme]);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        themeFile,
        lang,
        setTheme,
        setLang,
      }}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
