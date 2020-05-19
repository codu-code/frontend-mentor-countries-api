import React from "react";
import {Link} from "react-router-dom"

import styles from "./Header.module.scss";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Header = props => (
    <div className={`${styles.Fwc} ${props.theme === "light" ? styles.light : styles.dark}`}>
        <div className={styles.Header}>
            <p><Link to="/">Where in the world?</Link></p>
            <ThemeSwitch theme={props.theme} toggleTheme={props.toggleTheme}/>
        </div>
    </div>
);

export default Header;
