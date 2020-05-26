import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import CountryGridItem from '../CountryGridItem/CountryGridItem';
import { AppContext } from '../../App.provider.js';

import styles from './CountryGrid.module.scss';

const CountryGrid = ({ history }) => {
    const { theme, countries } = useContext(AppContext);
    return (
        <div className={styles.CountryGrid}>
            {countries.map(country => (
                <CountryGridItem
                    key={country.alpha3Code}
                    theme={theme}
                    flag={country.flag}
                    name={country.name}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    onClick={() => history.push(country.alpha3Code)}
                />
            ))}
        </div>
    );
};

export default withRouter(CountryGrid);
