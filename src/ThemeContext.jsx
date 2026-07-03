import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(() => {
    try {
      return localStorage.getItem("codex-theme") || "parchment";
    } catch {
      return "parchment";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("codex-theme", themeName);
    } catch {
      // localStorage unavailable — theme just won't persist across visits
    }
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName((t) => (t === "parchment" ? "light" : "parchment"));
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
