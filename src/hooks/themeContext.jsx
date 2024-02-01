import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const localStorageDarkMode = localStorage.getItem('darkMode');
    if (localStorageDarkMode) {
      setDarkMode(JSON.parse(localStorageDarkMode));
    } else if (window.matchMedia) {
      let darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

      if (darkThemeQuery.matches) {
        setDarkMode(true);
      }
    }
  }, []);

  const darkModeHandle = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  const bgColorClass = darkMode ? 'bg-dark' : 'bg-light';

  return (
    <ThemeContext.Provider value={{ darkMode, darkModeHandle, bgColorClass }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
