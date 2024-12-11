import { FC, ReactNode, useMemo, useState } from "react";
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContext";

type Props = { children: ReactNode };

const defTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) || ETheme.LIGHT;

const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<ETheme>(defTheme);

  const defProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defProps}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
