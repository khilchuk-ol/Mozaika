import { useCallback } from "react";

const useCookies = () => {
  const setCookies = useCallback((data) => {
    if (!data) {
      return;
    }

    document.cookie = JSON.stringify(data);
  }, []);

  const getCookies = useCallback(() => {
    const data = JSON.parse(document.cookie);
    if (!data) {
      return;
    }

    return data;
  }, []);

  return [getCookies, setCookies];
};

export default useCookies;
