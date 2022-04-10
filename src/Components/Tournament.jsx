import React from 'react';
import styles from './Tournament.module.scss'
import TournamentName from "./TournamentName";
import TournamentPrizePool from "./TournamentPrizePool";
import TournamentInformation from "./TournamentInformation";

const Tournament = () => {

    return (
            <section className={styles.tournament_section}>
                <TournamentName/>
                <TournamentPrizePool/>
                <TournamentInformation/>
            </section>
    )
        ;
};

export default Tournament;
