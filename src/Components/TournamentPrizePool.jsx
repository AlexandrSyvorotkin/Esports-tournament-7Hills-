import React from 'react';
import styles from './TournamentPrizePool.module.scss'
import {motion} from "framer-motion";
import greenLogo from "../Assets/Green.svg";

const TournamentPrizePool = () => {

    const marqueeVariants = {
        animate: {
            x: [0, 0],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 5,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div className={styles.prize_pool}>
            <motion.div
                variants={marqueeVariants}
                animate="animate"
                className={styles.prize_pool_ticker}>
                ПРИЗОВОЙ ФОНД <p>100 000</p> РУБЛЕЙ
                <div className={styles.green_logo}><img src={greenLogo} alt="greenLogo"/></div>
            </motion.div>
        </div>
    );
};

export default TournamentPrizePool;
