import React from "react";

import styles from "./CardBottom.module.scss";

const CardBottom = props => (
    <div className={styles.CardBottom}>
     <h1>{props.name}</h1>
        <ul>
            <li  key={props.alpha3Code}> 
                <strong>Population:&nbsp;</strong>{props.population}<br />
            </li>
            <li key={props.alpha3Code}>
                <strong>Region:&nbsp;</strong>{props.region}<br />
            </li>
            <li key={props.alpha3Code}>
                <strong>Capital:&nbsp;</strong>{props.capital}<br />
            </li>
        </ul> 
    </div>
)


export default CardBottom;