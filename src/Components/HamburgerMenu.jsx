import React from 'react';
import styles from './HamburgerMenu.module.css'

const HamburgerMenu = ({setSecondScreenActive}) => {


    return (
        <div className={styles.hamburgerMenu} onClick={()=>setSecondScreenActive(true)}>
            <div className={styles.hamburgerPart}/>
            <div className={styles.hamburgerPart}/>
            <div className={styles.hamburgerPart}/>
        </div>
    );
}

export default HamburgerMenu;
