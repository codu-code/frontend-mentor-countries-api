import React, { useContext, useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { AppContext } from '../../App.provider.js';
import styles from './CountryDetailsPage.module.scss';

const CountryDetailsPage = ({ match, history, countries }) => {
    const { getCountry, getCountryNameByCode, theme } = useContext(AppContext);
    const [country, setCountry] = useState(null);

    useEffect(() => {
        setCountry(getCountry(match.params.countryCode.toUpperCase()));
    }, [match.params.countryCode, getCountry]);

    useEffect(() => {
        console.log({ country });
    });
    return (
        (country && (
            <div
                className={`${styles.CountryDetailsPage}
              ${theme === 'dark' ? styles.dark : ''}
            `}
            >
                <main>
                    <button
                        className={styles.back}
                        onClick={() => history.goBack()}
                    >
                        <i className="fas fa-long-arrow-alt-left"></i>Back
                    </button>
                    <div className={styles.countryDetails}>
                        <img src={country.flag} alt={country.name} />
                        <h1>{country.name}</h1>
                        <ul>
                            <li>
                                <b>Native Name:</b> {country.nativeName}
                            </li>
                            <li>
                                <b>Population:</b> {country.population}
                            </li>
                            <li>
                                <b>Region:</b> {country.region}
                            </li>
                            <li>
                                <b>Sub Region:</b> {country.subregion}
                            </li>
                            <li>
                                <b>Capital:</b> {country.capital}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <b>Top Level Domain:</b>{' '}
                                {country.topLevelDomain}
                            </li>
                            <li>
                                <b>Currencies:</b>{' '}
                                {country.currencies
                                    .map(currency => currency.name)
                                    .join(', ')}
                            </li>
                            <li>
                                <b>Languages:</b>{' '}
                                {country.languages
                                    .map(language => language.name)
                                    .join(', ')}
                            </li>
                        </ul>
                        {country.borders.length > 0 && (
                            <div className={styles.borderCountries}>
                                <h2>Border Countries:</h2>
                                <div className={styles.borderCountriesList}>
                                    {country.borders.map(countryCode => (
                                        <Link
                                            to={countryCode}
                                            key={countryCode}
                                        >
                                            <button>
                                                {getCountryNameByCode(
                                                    countryCode
                                                )}
                                            </button>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        )) || (
            <div
                className={`${styles.CountryDetailsPage}
            ${theme === 'dark' ? styles.dark : ''}
            ${styles.error}
          `}
            >
                <h1>Country not found!</h1>
                <button
                    className={styles.back}
                    onClick={() => history.goBack()}
                >
                    <i className="fas fa-long-arrow-alt-left"></i>Back
                </button>
            </div>
        )
    );
};

export default withRouter(CountryDetailsPage);
