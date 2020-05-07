import React from 'react'

import styles from "./CountryGridPage.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import CountryGrid from '../CountryGrid/CountryGrid';

const CountryGridPage = props => {
    return (
        <div className={`${styles.CountryGridPage} ${props.theme === "dark" ? styles.dark : null}`}>
            <SearchBar 
                theme={props.theme}
                regionList={props.regionList}
                region={props.region}
                setRegion={props.setRegion}
                searchText={props.searchText}
                searchHandler={props.searchHandler}
            />
            <div className={styles.container}>
                <CountryGrid 
                    countries={props.countries}
                    theme={props.theme}
                />
            </div>
        </div>
    )
};

export default CountryGridPage;
