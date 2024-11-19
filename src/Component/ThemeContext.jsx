// ThemeContext.jsx
import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useEffect,
} from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../Component/theme";

const ColorModeContext = createContext(undefined);

export const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (!context)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return context;
};

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode === "light" || savedMode === "dark") {
      setMode(savedMode);
    }
  }, []);

  const toggleColorMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  useEffect(() => {
    document.documentElement.style.backgroundColor =
      theme.palette.background.default;
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme]);

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
