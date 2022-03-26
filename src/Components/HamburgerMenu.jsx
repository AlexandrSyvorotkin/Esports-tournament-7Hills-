import React from 'react';
import styles from './HamburgerMenu.module.css'

const HamburgerMenu = ({setSecondScreenActive}) => {

    return (
        <div className={styles.menu} onClick={() => setSecondScreenActive(true)}>
            <span className={styles.menu_span}/>
        </div>

    );
}

export default HamburgerMenu;
