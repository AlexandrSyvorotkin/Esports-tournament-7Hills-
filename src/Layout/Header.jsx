import React from 'react';
import styles from "./Header.module.css";
import Logo from "../Assets/mainLogo.svg";
import MFP from '../Assets/MFP.svg'

const Header = () => {


    // const ChangeWebSiteToMfpHandler = () => {
    //     window.location.href='https://mtuf.ru/'
    //     // Костыль, можно\нужно убрать
    // } onClick={ChangeWebSiteToMfpHandler}

    return (
        <header className={styles.header} >
            <div className={styles.header_logo}>
                <img src={Logo} alt="logo"/>
                <p className={styles.seven}>7</p>
                <h2 className={styles.small_logo}>киберспортивный турнир</h2>
                <h2 className={styles.hills}>Холмов</h2>
            </div>
            <div className={styles.organizer}>
                <div>
                    <img src={MFP} alt=""/>
                </div>
                <div className={styles.border}/>
                <a className={styles.org} href='https://mtuf.ru/'>ОРГАНИЗАТОР</a>
            </div>
        </header>
    );
};

export default Header;
