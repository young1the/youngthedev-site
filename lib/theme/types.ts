export type Theme = "light" | "dark";

type ModeObject = {
  [mode: string]: Theme;
};

export interface ThemeConstant {
  MODES: ModeObject;
  ROOT_ATTRIBUTE: string;
  STORAGE_LOCATION: string;
  MEDIA_SCHEME_DARK_MODE: string;
}
