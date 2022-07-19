import React from 'react';
import styles from './TournamentPrizePool.module.scss'
import greenLogo from "../../Assets/Green.svg";

const TournamentPrizePool = () => {


    return (
        <div className={styles.prize_pool}>
            <div className={styles.prize_pool_ticker}>
                ПРИЗОВОЙ ФОНД <p>200 000</p> РУБЛЕЙ
                <div className={styles.green_logo}><img src={greenLogo} alt="greenLogo"/></div>
            </div>
        </div>
    );
};

export default TournamentPrizePool;
