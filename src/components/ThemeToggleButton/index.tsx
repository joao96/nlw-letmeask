import { useContext } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

import { ThemeContext } from "../../contexts/ThemeContext";

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <DarkModeToggle
      onChange={toggleTheme}
      checked={theme?.name === "dark"}
      size={80}
    />
  );
}
