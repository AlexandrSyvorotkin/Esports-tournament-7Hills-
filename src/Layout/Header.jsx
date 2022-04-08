import React from 'react';
import styles from "./Header.module.scss";
import MFP from '../Assets/MFP.svg'
import kom from '../Assets/komitetbelii.png'
import SevenHills from '../Assets/Screenshot_8.png'

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.Sevenhills_logo}>
                <img src={SevenHills} alt="logo"/>
            </div>
            <div className={styles.mfp}>
                <a href="https://mtuf.ru/"><img src={MFP} alt=""/></a>
            </div>
            <div className={styles.moscow_text}>
                <a href="https://www.mos.ru/kos/"><img src={kom} alt=""/></a>
            </div>
        </header>
    );
};

export default Header;
