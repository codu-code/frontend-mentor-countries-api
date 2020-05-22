import React, { useContext } from 'react'

import styles from "./CountryGridPage.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import CountryGrid from '../CountryGrid/CountryGrid';
import {AppContext} from '../../App.provider.js';

const CountryGridPage = () => {
    const { theme } = useContext( AppContext );
    return (
        <div className={`${styles.CountryGridPage} ${theme === "dark" ? styles.dark : null}`}>
            <SearchBar />
            <div className={styles.container}>
                <CountryGrid />
            </div>
        </div>
    )
};

export default CountryGridPage;
