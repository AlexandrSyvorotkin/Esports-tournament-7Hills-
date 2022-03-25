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
                <p className={styles.small_logo}>киберспортивный турнир</p>
                <p className={styles.hills}>Холмов</p>
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
