import { createContext, useContext, useEffect } from "react";

type Theme = "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  // Force dark theme only
  const theme: Theme = "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove any existing theme classes and force dark
    root.classList.remove("light");
    root.classList.add("dark");
    
    // Also set localStorage to dark
    localStorage.setItem("vite-ui-theme", "dark");
  }, []);

  const value = {
    theme,
    setTheme: () => {
      // Do nothing - theme cannot be changed
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};