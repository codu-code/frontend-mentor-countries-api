import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import getCountries, { searchByName } from './utils';
import Header from './components/Header/Header';
import CountryGridPage from './components/CountryGridPage/CountryGridPage';
import CountryDetailsPage from './pages/CountryDetailsPage/CountryDetailsPage.js';

import './App.scss';

const App = () => {
    // Set theme to light by default
    const [theme, setTheme] = useState('light');
    const [countries, setCountries] = useState([]);
    const [region, setRegion] = useState('');
    const [searchText, setSearchText] = useState('');
    const [allCountries, setAllCountries] = useState([]);

    // Search Form Handler
    const searchHandler = val => {
        setSearchText(val);
    };

    // Reset countries on searchText update
    useEffect(() => {
        setCountries(searchByName(allCountries, searchText));
    }, [allCountries, searchText]);

    // Regions for filter menu
    const regionList = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    useEffect(() => {
        getCountries().then(res => {
            const countriesResponse = res.data;
            setAllCountries(countriesResponse);
            setCountries(countriesResponse);
        });
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`App ${theme === 'dark' ? 'dark' : ''}`}>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Route
                exact
                path="/"
                render={() => (
                    <CountryGridPage
                        theme={theme}
                        regionList={regionList}
                        region={region}
                        setRegion={setRegion}
                        countries={countries}
                        searchText={searchText}
                        searchHandler={searchHandler}
                    />
                )}
            />
            <Route
                exact
                path="/:countryCode"
                render={() => (
                    <CountryDetailsPage
                        countries={allCountries}
                        theme={theme}
                    />
                )}
            />
        </div>
    );
};

export default App;
