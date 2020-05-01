import React from "react";

import styles from "./Country.module.scss";
import Flag from "../Flag/Flag";
import CardBottom from "../CardBottom/CardBottom";

const Country = props => (
    <div className={`${styles.Country} ${props.theme === "light" ? styles.light : styles.dark}`}>
        
        <Flag flag={props.flag} />
        {/* <CardBottom
            name={props.name}
            population={props.population}
            region={props.region}
            capital={props.capital}
        /> */}
    
    </div>
)
 


export default Country;