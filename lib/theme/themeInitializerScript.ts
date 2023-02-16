import {themeConstants} from "./constants";

const themeInitializer = () => {
  const getInitialTheme = () => {
    const ourSitePreference = window.localStorage.getItem(
      themeConstants.STORAGE_LOCATION
    );
    if (ourSitePreference) {
      return ourSitePreference;
    }
    const userDefaultPreference = window.matchMedia(
      themeConstants.MEDIA_SCHEME_DARK_MODE
    );
    return userDefaultPreference
      ? themeConstants.MODES.DARK
      : themeConstants.MODES.LIGHT;
  };

  const initialTheme = getInitialTheme();
  const rootElement = document.documentElement;
  rootElement.setAttribute(themeConstants.ROOT_ATTRIBUTE, initialTheme);
};

const themeInitializerScript = `(function() {
  ${themeInitializer.toString()}
  themeInitializer();
})()
`;

export default themeInitializerScript;
