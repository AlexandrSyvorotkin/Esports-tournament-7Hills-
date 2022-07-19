import React from 'react';
import styles from './Tournament.module.scss'
import TournamentName from "../TournamentName/TournamentName";
import TournamentPrizePool from "../TournamentPrizePool/TournamentPrizePool";
import TournamentInformation from "../TournamentInformantion/TournamentInformation";

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
