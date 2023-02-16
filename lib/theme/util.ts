import { themeConstants, themes } from "./constants";
import { Theme } from "./types";

const getThemeIndex = (theme: Theme) => {
  return themes.indexOf(theme);
};

export const getInitialIndexState = (): number => {
  if (typeof process == typeof window) {
    const isDarkMode = window.matchMedia(
      themeConstants.MEDIA_SCHEME_DARK_MODE
    ).matches;
    return isDarkMode ? getThemeIndex("dark") : getThemeIndex("light");
  }
  return -1; // never
};
