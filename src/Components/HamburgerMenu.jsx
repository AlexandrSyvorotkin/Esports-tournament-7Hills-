import React from 'react';
import styles from './HamburgerMenu.module.scss'

const HamburgerMenu = ({setMenuActive}) => {

    return (
        <div className={styles.hamburger_menu} onClick={() => setMenuActive(true)}>
            <span/>
        </div>

    );
}

export default HamburgerMenu;
