import { useCallback } from "react";

const getCookiePattern = (cookieName) => new RegExp(`${cookieName}={.*}`, "gi");
const getCookieStr = (cookieName, dataObj) =>
  `${cookieName}=${JSON.stringify(dataObj)}`;

const useCookies = () => {
  const setCookies = useCallback((name, dataObj) => {
    if (!dataObj || !name) {
      return;
    }

    const cookie = getCookieStr(name, dataObj);
    document.cookie = cookie;

    console.log(document.cookie);
  }, []);

  const getCookies = useCallback((name) => {
    if (!name) {
      return;
    }

    const pattern = getCookiePattern(name);
    const cookie = document.cookie.match(pattern)?.shift();

    if (!cookie) {
      return;
    }

    const startData = cookie.indexOf("=") + 1;
    const endData = cookie.lastIndexOf("}") + 1;

    const data = JSON.parse(cookie.substring(startData, endData));
    if (!data) {
      return;
    }

    return data;
  }, []);

  return [getCookies, setCookies];
};

export default useCookies;
