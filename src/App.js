import React, { useState } from 'react';

import Header from './components/Header/Header';
import Dropdown from './components/Dropdown/Dropdown.js';

import './App.scss';

const App = () => {
    // Set theme to light by default
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    const [region, setRegion] = useState('');
    return (
        <div className={`App ${theme}`}>
            <Header theme={theme} toggleTheme={toggleTheme} />
            {/* Temporary example - DELETE when country list is created */}
            <Dropdown
                buttonText="Filter by Region"
                list={['Africa', 'America', 'Asia', 'Europe', 'Oceania']}
                selectedItem={region}
                onSelect={setRegion}
                theme={theme}
            />
            <h1>{region}</h1>
            {/* ----------------- */}
        </div>
    );
};

export default App;
