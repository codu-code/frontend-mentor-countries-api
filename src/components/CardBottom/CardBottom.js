import React from "react";

import styles from "./CardBottom.module.scss";

const CardBottom = props => (
    <div className={styles.CardBottom}>
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


export default CardBottom;