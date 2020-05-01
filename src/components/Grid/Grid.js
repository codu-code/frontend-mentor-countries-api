import React from "react";

import Country from "../Country/Country";


import styles from "./Grid.module.scss";

const Grid = props => (
    <div className={styles.Grid}>
        {props.countries.map(country => (
            <Country
                theme={props.theme}
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
            />
        ))}
    </div>
)


export default Grid;