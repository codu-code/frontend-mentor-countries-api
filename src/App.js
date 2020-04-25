import React, { useState } from 'react';

import './App.scss';

const App = () => {
  // Set theme to light by default
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className="App">
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Current theme: {theme}</h1>
    </div>
  );
};

export default App;
