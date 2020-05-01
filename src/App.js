import React, { useState, useEffect } from 'react';
import axios from 'axios';

import getCountries, { getBorders, getNestedData, searchByName } from './utils';

import Header from './components/Header/Header';
import Dropdown from './components/Dropdown/Dropdown.js';
import Grid from './components/Grid/Grid.js';

import './App.scss';

const App = () => {
    // Set theme to light by default
    const [theme, setTheme] = useState('light');
    const [countries, setCountries] = useState([]);
    const [borders, setBorders] = useState([]);
    const [region, setRegion] = useState('');

    useEffect(() => {
        getCountries().then(res => {
            const countriesResponse = res.data;
            setCountries(countriesResponse);
        });
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <div className="App">
            <Header theme={theme} toggleTheme={toggleTheme} />

            {/* Added for demonstration purposes */}
            <h1>Search By Name</h1>
            Searching for Spain: {searchByName(countries, 'Spain')}
            <h1>Search By Name</h1>
            Searching for foo: {searchByName(countries, 'foo')}
            <h1>Countries</h1>
            {/* Added for demonstration purposes */}
            {/* Added for demonstration purposes */}
            <Dropdown
              buttonText="Filter by Region"
              list={['Africa', 'America', 'Asia', 'Europe', 'Oceania']}
              selectedItem={region}
              onSelect={setRegion}
              theme={theme}
            />
            <h1>{region}</h1>
            {/* Added for demonstration purposes */}
            {/* Added for demonstration purposes */}
            {/* <ul> */}
            <Grid 
              countries={countries}
              theme={theme}
            />
                  {/* {countries.map(country => (
                    <Country 
                      theme={theme} 
                      flag={country.flag}
                      name={country.name}
                      population={country.population}
                      region={country.region}
                      capital={country.capital}
                    />     
                  ))} */}
            {/* </Grid> */}
            {/* </ul> */}
            {/* Added for demonstration purposes */}

        </div>
    );
};
{/* <li key={country.alpha3Code}>
{country.name} <br />/ native name:{' '}
{country.nativeName} <br />/ population:{' '}
{country.population} <br />/ region:{' '}
{country.region} <br />/ subregion:{' '}
{country.subregion} <br />/ capital:{' '}
{country.capital} <br />/ top level domain:{' '}
{country.topLevelDomain} <br />/ borders:{' '}
{getBorders(country.borders)} <br />/ currencies:{' '}
{getNestedData(country.currencies)} <br />/
languages: {getNestedData(country.languages)}
</li> */}
export default App;