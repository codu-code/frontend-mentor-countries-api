import React, { createContext, useState, useEffect } from 'react';
import { searchByName, searchByRegion } from './utils';

export const AppContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
    allCountries: [],
    setAllCountries: () => {},
    countries: [],
    getCountry: () => {},
    setCountries: () => {},
    getCountryNameByCode: () => {},
    selectedCountry: {},
    searchText: '',
    setSearchText: () => {},
    regionList: [],
    region: '',
    setRegion: () => {}
});

const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [regionList] = useState([
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania',
        'Polar'
    ]);

    const [searchText, setSearchText] = useState('');
    const [allCountries, setAllCountries] = useState([]);
    const [countries, setCountries] = useState([]);
    const [region, setRegion] = useState('');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    const getCountryNameByCode = code => {
        const country = allCountries.find(
            country => country.alpha3Code === code
        );
        const name = country ? country.name : code;
        return name;
    };

    const getCountry = code =>
        allCountries.find(country => country.alpha3Code === code);

    useEffect(() => {
        const countriesByRegion = searchByRegion(allCountries, region);
        const newCountries = searchByName(countriesByRegion, searchText);
        setCountries(newCountries);
    }, [allCountries, searchText, region]);

    return (
        <AppContext.Provider
            value={{
                theme,
                toggleTheme,
                regionList,
                searchText,
                setSearchText,
                allCountries,
                setAllCountries,
                countries,
                getCountry,
                setCountries,
                getCountryNameByCode,
                region,
                setRegion
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
