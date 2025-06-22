import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('Light');
  const [theme, setTheme] = useState('Crimson');

  useEffect(() => {
    const loadPreferences = async () => {
      try {
        const storedMode = await AsyncStorage.getItem('app-mode');
        const storedTheme = await AsyncStorage.getItem('app-theme');

        if (storedMode) setMode(storedMode);
        if (storedTheme) setTheme(storedTheme);
      } catch (e) {
        console.log('Failed to load theme preferences:', e);
      }
    };

    loadPreferences();
  }, []);
  
  const toggleMode = async() => {
    // setMode(prevMode => prevMode === 'Light' ? 'Dark' : 'Light');
    const newMode = mode === 'Light' ? 'Dark' : 'Light';
    setMode(newMode);
    await AsyncStorage.setItem('app-mode', newMode);
  };
  
  const changeTheme = async() => {
    const themes = ['Crimson', 'Aura', 'Field'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    // setTheme(themes[nextIndex]);
     const newTheme = themes[nextIndex];
    setTheme(newTheme);
    await AsyncStorage.setItem('app-theme', newTheme);
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