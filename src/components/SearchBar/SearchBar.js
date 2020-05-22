import React, { useContext } from 'react'

import Dropdown from "../Dropdown/Dropdown";
import SearchForm from "../SearchForm/SearchForm";
import { AppContext } from "../../App.provider.js";

import styles from "./SearchBar.module.scss";

const SearchBar = () => {
    const {theme, regionList, searchText, setSearchText, region, setRegion} = useContext(AppContext);
    return (
        <div className={styles.SearchBar}>
            <SearchForm
                theme={theme}
                searchText={searchText}
                searchHandler={setSearchText}
            />
            <Dropdown
                list={regionList}
                theme={theme}
                selectedItem={region}
                onSelect={setRegion}
                buttonText="Filter by Region"
            />
        </div>
    )
};

export default SearchBar;
