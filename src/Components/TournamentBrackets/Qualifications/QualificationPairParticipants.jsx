import React from 'react';
import styles from './QualificationPairParticipant.module.scss'

const QualificationPairParticipants = ({firstParticipant, secondParticipant, counter1, counter2, team_1_win, team_2_win}) => {

    return (
        <div className={styles.gamePair}>
            <div className={ team_1_win ? `${styles.participant} + ${styles.win}` : `${styles.participant} `}>{firstParticipant}</div>
            <span>{counter1}</span>
            <span>vs</span>
            <span>{counter2}</span>
            <div className={ team_2_win ? `${styles.participant} + ${styles.win}` : `${styles.participant} `}>{secondParticipant}</div>
        </div>
    );
};

export default QualificationPairParticipants;


