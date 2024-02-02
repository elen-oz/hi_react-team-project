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

  const themeContext = {
    darkMode,
    darkModeHandle,
    bgColorClass: darkMode ? 'bg-dark' : 'bg-light',
    textColorClass: darkMode ? 'text-light' : 'text-dark',
    borderColorClass: darkMode ? 'border-light' : 'border-dark-subtle',
  };

  // const bgColorClass = darkMode ? 'bg-dark' : 'bg-light';
  // const textColorClass = darkMode ? 'text-light' : 'text-dark';
  // const borderColorClass = darkMode ? 'border-light' : 'border-dark-subtle';

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
