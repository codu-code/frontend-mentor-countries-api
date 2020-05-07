import React from 'react'

import styles from "./SearchForm.module.scss";

const SearchForm = props => {
    return (
        <div className={`${styles.SearchForm} ${props.theme === "dark" ? styles.dark : null}`}>
            <form>
                <i className="fas fa-search"></i>
                <input 
                    type="text" 
                    name="search" 
                    value={props.searchText} 
                    onChange={e => props.searchHandler(e.target.value)}
                    placeholder="Search for a country..." 
                />
            </form>
        </div>
    )
};

export default SearchForm;