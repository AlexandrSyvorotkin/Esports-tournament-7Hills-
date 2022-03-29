import React from 'react';
import styles from "./Header.module.scss";
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
                <p className={styles.header_logo_content}>7</p>
                <p className={styles.header_logo_name}>киберспортивный турнир</p>
                <p className={styles.header_logo_name_description}>Холмов</p>
            </div>
            <div className={styles.organization}>
                <div>
                    <img src={MFP} alt=""/>
                </div>
                <div className={styles.organization_content}/>
                <a className={styles.organization_link} href='https://mtuf.ru/'>ОРГАНИЗАТОР</a>
            </div>
        </header>
    );
};

export default Header;
