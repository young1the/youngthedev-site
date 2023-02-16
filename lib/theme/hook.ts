import { themeConstants, themes } from "./constants";
import { getInitialIndexState } from "./util";
import { useState, useEffect } from "react";

const useTheme = () => {
  const [themeIndex, setThemeIndex] = useState(() => {
    return getInitialIndexState();
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      themeConstants.ROOT_ATTRIBUTE,
      themes[themeIndex]
    );
    window.localStorage.setItem(
      themeConstants.STORAGE_LOCATION,
      themes[themeIndex]
    );
  }, [themeIndex]);

  const handleToggle = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  return { handleToggle };
};

export default useTheme;
