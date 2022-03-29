import React from 'react';
import styles from './Tournament.module.scss'
import greenLogo from '../Assets/Green.svg'
import {motion} from 'framer-motion'

const Tournament = () => {

    // доделать анимацию

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
        <section>
            <div className={styles.tournament_section}>
                <div className={styles.tournament_description}>КИБЕРСПОРТИВНЫЙ</div>
                <div className={styles.tournament}>
                    <h1>ТУРНИР</h1>
                    <div className={styles.tournament_diamond}/>
                </div>
                <div className={styles.prize_pool}>
                    <motion.div
                        variants={marqueeVariants}
                        animate="animate"
                        className={styles.prize_pool_ticker}>
                            ПРИЗОВОЙ ФОНД <p>100 000</p> РУБЛЕЙ
                        <div className={styles.green_logo}><img src={greenLogo} alt="greenLogo"/></div>
                    </motion.div>
                </div>
                <div className={styles.tournament_information}>
                    <p>МОСКОВСКАЯ ФЕДЕРАЦИЯ ПРОФСОЮЗОВ ПРОВОДИТ</p>
                    <p> УЖЕ ТРЕТИЙ ОНЛАЙН-ТУРНИР ПО КИБЕРСПОРТУ СРЕДИ ТРУДОВЫХ И <br/> СТУДЕНЧЕСКИХ  КОЛЛЕКТИВОВ ЧЛЕНСКИХ
                        ОРГАНИЗАЦИЙ
                        МФП!</p>
                </div>
            </div>
        </section>
    )
        ;
};

export default Tournament;
