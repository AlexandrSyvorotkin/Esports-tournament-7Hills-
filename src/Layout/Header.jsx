import React from 'react';
import styles from "./Header.module.scss";
import Logo from "../Assets/mainLogo.svg";
import MFP from '../Assets/MFP.svg'
import moscow from '../Assets/MoscowKomitet.png'
import sevenHills from '../Assets/7hills.jpg'

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
                <div className={styles.mfp}>
                    <img src={MFP} alt=""/>
                </div>
                <div className={styles.moscow}>
                    <div className={styles.moscow_img}>
                        <img src={moscow} alt=""/>
                    </div>
                    <div className={styles.moscow_text}>
                        <p className={styles.moscow_commitette}>Комитет <br/> общественных связей</p>
                        <p>и молодежной политики города москвы</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
