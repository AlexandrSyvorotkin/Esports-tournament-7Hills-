import React from 'react';
import styles from './TournamentPrizePool.module.scss'
import {motion} from "framer-motion";
import greenLogo from "../Assets/Green.svg";
import CounterTimer from "./CounterTimer/CounterTImer";

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
