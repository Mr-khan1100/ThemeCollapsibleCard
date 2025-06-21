import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('Light');
  const [theme, setTheme] = useState('Crimson');
  
  const toggleMode = () => {
    setMode(prevMode => prevMode === 'Light' ? 'Dark' : 'Light');
  };
  
  const changeTheme = () => {
    const themes = ['Crimson', 'Aura', 'Field'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ 
      mode, 
      theme,
      toggleMode,
      changeTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);