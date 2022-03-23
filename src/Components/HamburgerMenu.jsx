import React from 'react';
import styles from './HamburgerMenu.module.css'

const HamburgerMenu = ({setActive}) => {

    return (
        <div className={styles.hamburgerMenu} onClick={()=> setActive(true)}>
            <div className={styles.hamburgerPart}/>
            <div className={styles.hamburgerPart}/>
            <div className={styles.hamburgerPart}/>
        </div>
    );
}

export default HamburgerMenu;
