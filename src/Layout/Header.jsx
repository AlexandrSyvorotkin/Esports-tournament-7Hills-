import React from 'react';
import styles from "./Information.module.css";
import Logo from "../Assets/Rectangle 7.png";

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img src={Logo} alt="logo"/>
            </div>
            <div className={styles.organizer}>
                <p>мфп</p>
                <div className={styles.border}></div>
                <p>ОРГАНИЗАТОР</p>
            </div>
        </header>
    );
};

export default Header;