import React from "react";

import styles from "./Flag.module.scss";

const Flag = props => (
   <img className={styles.Flag} src={props.flag} alt={props.name}/>
)

export default Flag;