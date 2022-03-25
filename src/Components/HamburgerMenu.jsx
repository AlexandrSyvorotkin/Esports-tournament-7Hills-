import React from 'react';
import styles from './HamburgerMenu.module.css'

const HamburgerMenu = () => {

    const click = () => {
        console.log('click')
    }


    return (
        <div className={styles.hamburgerMenu} onClick={click}>
            <div className={styles.hamburgerPart}/>
            <div className={styles.hamburgerPart}/>
            <div className={styles.hamburgerPart}/>
        </div>
    );
}

export default HamburgerMenu;
