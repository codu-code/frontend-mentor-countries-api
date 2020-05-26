import React from 'react';

import styles from './CountryGridItem.module.scss';

const CountryGridItem = props => (
    <div
        className={`${styles.Country} ${
            props.theme === 'light' ? styles.light : styles.dark
        }`}
        onClick={props.onClick}
    >
        <img className={styles.Flag} src={props.flag} alt={props.name} />
        <div className={styles.infoBlock}>
            <h1>{props.name}</h1>
            <ul>
                <li>
                    <strong>Population:&nbsp;</strong>
                    {props.population}
                    <br />
                </li>
                <li>
                    <strong>Region:&nbsp;</strong>
                    {props.region}
                    <br />
                </li>
                <li>
                    <strong>Capital:&nbsp;</strong>
                    {props.capital}
                    <br />
                </li>
            </ul>
        </div>
    </div>
);

export default CountryGridItem;
