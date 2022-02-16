import React from 'react';
import styles from './Tournament.module.css'
import whiteLogo from '../Assets/white-logo.png'
import greenLogo from '../Assets/GreenLogo.png'
// import MovingComponent from "react-moving-text";


const Tournament = () => {
    return (
        <div className={styles.tournament}>
                <div className={styles.esports}>КИБЕРСПОРТИВНЫЙ</div>
            <div className={styles.esports_name}>
                ТУРНИР
                <img className={styles.tournament_logo} src={whiteLogo} alt=""/>
            </div>
            <div className={styles.prizePool}>
                {/*<MovingComponent*/}
                {/*    type="slideOutToLeft"*/}
                {/*    duration="2000ms"*/}
                {/*    delay="0s"*/}
                {/*    direction="normal"*/}
                {/*    timing="ease"*/}
                {/*    iteration="5"*/}
                {/*    fillMode="none">*/}
                {/*</MovingComponent>*/}
                ПРИЗОВОЙ ФОНД 100 000 РУБЛЕЙ
                <img src={greenLogo} alt=""/>
            </div>
            <div className={styles.tournament_info}>
                <p>Московская Федерация Профсоюзов проводит уже ТРЕТИЙ онлайн-турнир по киберспорту среди трудовых и студенческих коллективов членских организаций МФП!</p>
            </div>
        </div>
    );
};

export default Tournament;