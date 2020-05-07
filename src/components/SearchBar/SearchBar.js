import React from 'react'

import Dropdown from "../Dropdown/Dropdown";
import SearchForm from "../SearchForm/SearchForm";
import styles from "./SearchBar.module.scss";

const SearchBar = props => {
    return (
        <div className={styles.SearchBar}>
            <SearchForm 
                theme={props.theme}
                searchText={props.searchText}
                searchHandler={props.searchHandler}
            />
            <Dropdown 
                list={props.regionList}
                theme={props.theme}
                selectedItem={props.region}
                onSelect={props.setRegion}
                buttonText="Filter by Region"
            />
        </div>
    )
};

export default SearchBar;
