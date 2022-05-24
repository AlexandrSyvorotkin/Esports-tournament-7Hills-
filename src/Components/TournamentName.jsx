import React from 'react';
import styles from './TournamentName.module.scss'
import CounterTimer from "./CounterTimer/CounterTImer";

const TournamentName = () => {
    return (
        <>
            <div className={styles.tournament_description}>КИБЕРСПОРТИВНЫЙ</div>
            <div className={styles.tournament}>
                <h1>ТУРНИР</h1>
                <div className={styles.tournament_diamond}/>
            </div>
            {/*<CounterTimer/>*/}
        </>
    );
};

export default TournamentName;
