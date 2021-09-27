import { createContext, ReactNode, useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

type ThemeContextType = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider(props: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  const toggleTheme = () => {
    if (theme?.name === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme(darkTheme);
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme(lightTheme);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme === "light" ? lightTheme : darkTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
