import { useContext } from "react";
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContext";

interface IUseThemeResult {
  toggleTheme: () => void;
  theme: ETheme;
}

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
}
