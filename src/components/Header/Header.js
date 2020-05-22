import React, {useContext} from "react";
import {Link} from "react-router-dom"

import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

import { AppContext } from "../../App.provider.js";
import styles from "./Header.module.scss";

const Header = () => {
  const {theme, toggleTheme} = useContext(AppContext)
  return (
    <div className={`${styles.Fwc} ${theme === "light" ? styles.light : styles.dark}`}>
        <div className={styles.Header}>
            <p><Link to="/">Where in the world?</Link></p>
            <ThemeSwitch theme={theme} toggleTheme={toggleTheme}/>
        </div>
    </div>
)};

export default Header;
