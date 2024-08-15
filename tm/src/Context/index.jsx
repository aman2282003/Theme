import React from "react";
import { createContext } from "react";
import { useState } from "react";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useState("Light");
  return (
    <ThemeContext.Provider value={{ Theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
