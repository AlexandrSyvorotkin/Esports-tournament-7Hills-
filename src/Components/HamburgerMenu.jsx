import React from 'react';
import styles from './HamburgerMenu.module.css'

const HamburgerMenu = () => {

    return (
        <div className={styles.hamburgerMenu}>
            <div className={styles.hamburgerPart}/>
            <div className={styles.hamburgerPart}/>
            <div className={styles.hamburgerPart}/>
        </div>
    );
}

export default HamburgerMenu;