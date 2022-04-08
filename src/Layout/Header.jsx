import React from 'react';
import styles from "./Header.module.scss";
import Logo from "../Assets/mainLogo.svg";
import MFP from '../Assets/MFP.svg'
import moscow from '../Assets/MoscowKomitet.png'
import kom from '../Assets/komitetbelii.png'

const Header = () => {

    return (
        <header className={styles.header} >
            <div className={styles.header_logo}>
                <img src={Logo} alt="logo"/>
                <p className={styles.header_logo_content}>7</p>
                <p className={styles.header_logo_name}>киберспортивный турнир</p>
                <p className={styles.header_logo_name_description}>Холмов</p>
            </div>
            <div className={styles.organization}>
                <div className={styles.mfp}>
                    <a href="https://mtuf.ru/"><img src={MFP} alt=""/></a>
                </div>
                <div className={styles.moscow_text}>
                    <img src={kom} alt=""/>
                </div>

            </div>
        </header>
    );
};

export default Header;
