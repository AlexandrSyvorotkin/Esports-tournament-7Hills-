import React from 'react';
import styles from './Tournament.module.scss'
import TournamentName from "./TournamentName";
import TournamentPrizePool from "./TournamentPrizePool";
import TournamentInformation from "./TournamentInformation";

const Tournament = () => {

    return (
        <section>
            <div className={styles.tournament_section}>
                <TournamentName/>
                <TournamentPrizePool/>
                <TournamentInformation/>
            </div>
        </section>
    )
        ;
};

export default Tournament;
