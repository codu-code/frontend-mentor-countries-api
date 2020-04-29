import React from "react";

import styles from "./Country.module.scss";
import Flag from "../Flag/Flag";

const Country = props => (
    <div className={`${styles.Country} ${props.theme === "light" ? styles.light : styles.dark}`}>
        
        <Flag flag={props.flag} />
        <h1>{props.name}</h1>
        <ul>
        <li>
            <strong>Population:&nbsp;</strong>{props.population}<br />
        </li>
        <li>
            <strong>Region:&nbsp;</strong>{props.region}<br />
        </li>
        <li>
            <strong>Capital:&nbsp;</strong>{props.capital}<br />
        </li>
        </ul>
    </div>
)
 


export default Country;