import React from 'react';
import styles from './Tournament.module.css'
import whiteLogo from '../Assets/White.svg'
import greenLogo from '../Assets/Green.svg'
import {motion} from 'framer-motion'

const Tournament = () => {

    // доделать анимацию

    const marqueeVariants = {
        animate: {
            x: [0, -500],
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
        <section>
            <div className={styles.tournament}>
                <h1 className={styles.esports}>КИБЕРСПОРТИВНЫЙ</h1>
                <h2 className={styles.esports_name}>
                    ТУРНИР
                    <img className={styles.tournament_logo} src={whiteLogo} alt=""/>
                </h2>
                <div className={styles.prizePool}>
                    <motion.div
                        variants={marqueeVariants}
                        animate="animate"
                        className={styles.ticker}>
                        ПРИЗОВОЙ ФОНД <p>100 000</p> РУБЛЕЙ
                        <img src={greenLogo} alt="greenLogo"/>
                    </motion.div>
                </div>
                <div className={styles.tournament_info}>
                    <p className={styles.p}>МОСКОВСКАЯ ФЕДЕРАЦИЯ ПРОФСОЮЗОВ ПРОВОДИТ</p>
                    <p> УЖЕ ТРЕТИЙ ОНЛАЙН-ТУРНИР ПО КИБЕРСПОРТУ СРЕДИ ТРУДОВЫХ И СТУДЕНЧЕСКИХ <br/> КОЛЛЕКТИВОВ ЧЛЕНСКИХ
                        ОРГАНИЗАЦИЙ
                        МФП!</p>
                </div>
            </div>
        </section>
    )
        ;
};

export default Tournament;
