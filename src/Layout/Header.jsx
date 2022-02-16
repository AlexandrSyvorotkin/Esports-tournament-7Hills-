import React from 'react';
import styles from "./Header.module.css";
import Logo from "../Assets/MainLogo.png";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_logo}>
                <img src={Logo} alt="logo"/>
                <p>7</p>
            </div>
            {/*<div className={styles.organizer}>*/}
            {/*    <div className={styles.organization_logo}>*/}
            {/*    </div>*/}
            {/*    <div className={styles.border}></div>*/}
            {/*    <p>ОРГАНИЗАТОР</p>*/}
            {/*</div>*/}
        </header>
    );
};

export default Header;