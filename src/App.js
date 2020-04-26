import React, { useState } from 'react';

import './App.scss';
import Header from "./components/Header/Header";

const App = () => {
  // Set theme to light by default
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className="App">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Current theme: {theme}</h1>
    </div>
  );
};

export default App;
