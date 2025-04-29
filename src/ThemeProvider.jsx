import { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext.js';

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prev => !prev);
  };

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(darkTheme ? "dark" : "light");
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
