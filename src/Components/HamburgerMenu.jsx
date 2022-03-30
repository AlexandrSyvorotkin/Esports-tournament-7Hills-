import React from 'react';
import styles from './HamburgerMenu.module.scss'

const HamburgerMenu = ({setSecondScreenActive}) => {

    // Поменять стили

    return (
        <div className={styles.hamburger_menu} onClick={() => setSecondScreenActive(true)}>
            <span/>
        </div>

    );
}

export default HamburgerMenu;
