import React from 'react';
import styles from './Tournament.module.css'
import whiteLogo from '../Assets/White.svg'
import greenLogo from '../Assets/Green.svg'
// import MovingComponent from "react-moving-text";


const Tournament = () => {
    return (
        <>
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
                    ПРИЗОВОЙ ФОНД <p>100 000</p> РУБЛЕЙ
                    <img src={greenLogo} alt=""/>
                </div>
            </div>
            <div className={styles.tournament_info}>
                <p className={styles.p}>МОСКОВСКАЯ ФЕДЕРАЦИЯ ПРОФСОЮЗОВ ПРОВОДИТ</p>
                <p> УЖЕ ТРЕТИЙ ОНЛАЙН-ТУРНИР ПО КИБЕРСПОРТУ СРЕДИ ТРУДОВЫХ И СТУДЕНЧЕСКИХ <br/> КОЛЛЕКТИВОВ ЧЛЕНСКИХ
                    ОРГАНИЗАЦИЙ
                    МФП!</p>
            </div>
        </>
    )
        ;
};

export default Tournament;