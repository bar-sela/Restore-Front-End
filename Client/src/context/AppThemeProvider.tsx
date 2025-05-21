import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function AppThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("app-theme") as Theme) || "dark";
  });

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-wrapper ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
//// add more functions here to access other  theme context
