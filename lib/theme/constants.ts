import { ThemeConstant } from "./types";

const constants: ThemeConstant = {
  MODES: {
    LIGHT: "light",
    DARK: "dark",
  },
  ROOT_ATTRIBUTE: "data-theme",
  STORAGE_LOCATION: "theme",
  MEDIA_SCHEME_DARK_MODE: "(prefers-color-scheme: dark)",
};

export const themes = Object.values(constants.MODES);
export const themeConstants = Object.freeze(constants);
