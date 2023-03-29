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

export const ascii = () => {
  console.log("             .     .");
  console.log("            (>---/<)");
  console.log("            ,'     `.");
  console.log("           /  q   p  \\");
  console.log("          (  >(_Y_)<  )");
  console.log("           >-' `-' `-<-.");
  console.log("          /  _.== ,=.,- \\");
  console.log("         /,    )`  '(    )");
  console.log("        ; `._.'      `--<");
  console.log("       :     \\        |  )");
  console.log("       \\      )       ;_/ ");
  console.log("        `._ _/_  ___.'-\\\\\\");
};
