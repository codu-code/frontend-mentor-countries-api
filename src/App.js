import React, { useEffect, useContext } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import CountryGridPage from './components/CountryGridPage/CountryGridPage';
import CountryDetailsPage from './pages/CountryDetailsPage/CountryDetailsPage.js';

import { AppContext } from './App.provider.js';
import { getCountries } from './utils';

import './App.scss';

const App = () => {
    const { theme, setCountries, setAllCountries } = useContext(AppContext);

    useEffect(() => {
        getCountries().then(({ data }) => {
            setAllCountries(data);
            setCountries(data);
        });
    }, [setCountries, setAllCountries]);

    return (
        <div className={`App ${theme === 'dark' ? 'dark' : ''}`}>
            <Header />
            <Route exact path="/" component={CountryGridPage} />
            <Route exact path="/:countryCode" component={CountryDetailsPage} />
        </div>
    );
};

export default App;
