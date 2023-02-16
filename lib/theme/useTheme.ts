import { themeConstants, modes } from "./constants";
import { useState, useEffect } from "react";

const useTheme = () => {
  const [modeIndex, setModeIndex] = useState<number>(
    themeConstants.INITIAL_MODE_INDEX
  );
  const handleToggle = () => {
    setModeIndex((prev) => (prev + 1) % modes.length);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      themeConstants.ROOT_ATTRIBUTE,
      modes[modeIndex]
    );
    window.localStorage.setItem(
      themeConstants.STORAGE_LOCATION,
      modes[modeIndex]
    );
  }, [modeIndex]);

  return { handleToggle };
};

export default useTheme;
