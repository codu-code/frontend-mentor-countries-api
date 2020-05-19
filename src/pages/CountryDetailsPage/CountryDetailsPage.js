import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import styles from './CountryDetailsPage.module.scss';

const CountryDetailsPage = ({ match, history, countries, theme }) => {
    const country = countries.find(
        country => country.alpha3Code === match.params.countryCode
    );

    const getCountryNameByCode = code => {
        const country = countries.find(country => country.alpha3Code === code);
        const name = country ? country.name : code;
        return name;
    };

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
                                {country.currencies.map(
                                    currency => currency.name
                                )}
                            </li>
                            <li>
                                <b>Languages:</b>{' '}
                                {country.languages.map(
                                    language => `${language.name} `
                                )}
                            </li>
                        </ul>
                        {country.borders.length && (
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
