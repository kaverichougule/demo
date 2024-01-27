import React from 'react';
import styles from "./Display.module.css";
function Display(props) {
    return (
        <input type="text" className={styles.display} />
    );
}

export default Display;