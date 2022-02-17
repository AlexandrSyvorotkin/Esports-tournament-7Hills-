import React from 'react';
import styles from "./Header.module.css";
import Logo from "../Assets/mainLogo.svg";
import MFP from '../Assets/MFP.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_logo}>
                <img src={Logo} alt="logo"/>
                <p className={styles.seven}>7</p>
                <p className={styles.small_logo}>киберспортивный турнир</p>
                <p className={styles.hills}>Холмов</p>
            </div>
            <div className={styles.organizer}>
                <div className={styles.organization_logo}>
                    <img src={MFP} alt=""/>
                </div>
                <div className={styles.border}></div>
                <p>ОРГАНИЗАТОР</p>
            </div>
        </header>
    );
};

export default Header;