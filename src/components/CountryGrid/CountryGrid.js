import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Country from '../Country/Country';
import { AppContext } from '../../App.provider.js';

const CountryGrid = () => {
    const { theme, countries } = useContext(AppContext);
    return (
        countries && (
            <div>
                <ul>
                    {countries.map(country => (
                        <div key={country.alpha3Code} style={{ padding: 20 }}>
                            <Link to={country.alpha3Code}>
                                <Country
                                    theme={theme}
                                    flag={country.flag}
                                    name={country.name}
                                    population={country.population}
                                    region={country.region}
                                    capital={country.capital}
                                />
                            </Link>
                        </div>
                    ))}
                </ul>
            </div>
        )
    );
};

export default CountryGrid;
