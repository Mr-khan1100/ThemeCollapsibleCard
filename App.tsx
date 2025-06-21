import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';
import Screen from './src/mainScreen/Screen';

const App = () => {
  return (
    <ThemeProvider>
      <Screen />
    </ThemeProvider>
  );
};

export default App;