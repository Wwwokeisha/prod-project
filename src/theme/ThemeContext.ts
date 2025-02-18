import { createContext } from "react";

export enum ETheme {
  LIGHT = "light",
  DARK = "dark",
}

export interface IThemeContextProps {
  theme?: ETheme;
  setTheme?: (theme: ETheme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
