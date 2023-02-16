const constants = {
  MODES: {
    LIGHT: "light",
    DARK: "dark",
    // TODO: 테마 추가 구현
    // RED: "red",
  },
  ROOT_ATTRIBUTE: "data-theme",
  STORAGE_LOCATION: "theme",
  MEDIA_SCHEME_DARK_MODE: "(prefers-color-scheme: dark)",
  INITIAL_MODE_INDEX: 0,
};

export const modes = Object.values(constants.MODES);
export const themeConstants = Object.freeze(constants);
