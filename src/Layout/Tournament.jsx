import React from 'react';
import styles from './Tournament.module.css'
import whiteLogo from '../Assets/white-logo.png'
import greenLogo from '../Assets/GreenLogo.png'

const Tournament = () => {
    return (
        <div className={styles.tournament}>
                <p className={styles.esport}>КИБЕРСПОРТИВНЫЙ</p>
            <div className={styles.esport_name}>
                <p className={styles.esport_tournament}>ТУРНИР</p>
                <img className={styles.tournament_logo} src={whiteLogo} alt=""/>
            </div>
            <div className={styles.prizePool}>
                <p>ПРИЗОВОЙ ФОНД 100 000 РУБЛЕЙ</p>
                <img src={greenLogo} alt=""/>
            </div>
            <div className={styles.tournament_info}>
                <p>Московская Федерация Профсоюзов проводит уже ТРЕТИЙ онлайн-турнир по киберспорту среди трудовых и студенческих коллективов членских организаций МФП!</p>
            </div>
        </div>
    );
};

export default Tournament;