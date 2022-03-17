import React from 'react';
import styles from './Disciplines.module.css'
import Arrow from '../Assets/whiteArrow.svg'
import HamburgerMenu from "../Components/HamburgerMenu";

const Disciplines = () => {

    return (
        <div className={styles.disciplines}>
            <div className={styles.dota} >
                <p>Dota 2</p>
                <div className={styles.arrow}>
                    <img src={Arrow} alt=""/>
                </div>
            </div>
            <div className={styles.csgo}>
                <p>CS:GO</p>
                <div className={styles.arrow}>
                    <img src={Arrow} alt=""/>
                </div>
            </div>
            <div className={styles.valorant}>
                <p>VALORANT</p>
                <div className={styles.arrow}>
                    <img src={Arrow} alt=""/>
                </div>
            </div>
            <div className={styles.fifa}>
                <p>FIFA 22</p>
                <div className={styles.arrow}>
                    <img src={Arrow} alt=""/>
                </div>
            </div>
            <HamburgerMenu/>
        </div>
    );
};

export default Disciplines;