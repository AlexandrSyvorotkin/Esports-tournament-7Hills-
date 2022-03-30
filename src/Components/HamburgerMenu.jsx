import React from 'react';
import styles from './HamburgerMenu.module.scss'

const HamburgerMenu = ({setSecondScreenActive}) => {

    return (
        <div className={styles.hamburger_menu} onClick={() => setSecondScreenActive(true)}>
            <span/>
        </div>

    );
}

export default HamburgerMenu;
