import { createContext, useEffect, useState } from "react";

import useCookies from "../hooks/use-cookies";
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
  const [getCookies, setCookies] = useCookies();

  const [theme, setTheme] = useState("default");
  const [themeFile, setThemeFile] = useState("");
  const [lang, setLang] = useState("en-US");

  useEffect(() => {
    const settingsData = getCookies();
    if (!settingsData) {
      setCookies({ theme, lang });
    } else {
      if (settingsData.theme) {
        setTheme(settingsData.theme);
      }

      if (settingsData.lang) {
        setLang(settingsData.lang);
      }
    }

    const found = themes[theme];

    if (!found) {
      console.error("Theme not found!!");
    } else {
      setThemeFile(found);
    }
  }, [theme, lang, getCookies, setCookies]);

  const handleThemeChange = (newTheme) => {
    setCookies({ lang, theme: newTheme });
    setTheme(newTheme);
  };

  const handleLangChange = (newLang) => {
    setCookies({ lang: newLang, theme });
    setLang(newLang);
  };

  return (
    <SettingsContext.Provider
      value={{
        theme,
        themeFile,
        lang,
        changeTheme: handleThemeChange,
        changeLang: handleLangChange,
      }}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
