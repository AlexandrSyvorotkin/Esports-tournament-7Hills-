import React from 'react';
import styles from './QualificationPairParticipant.module.scss'

const QualificationPairParticipants = ({firstParticipant, secondParticipant, counter1, counter2}) => {
    return (
        <div className={styles.gamePair}>
            <div className={styles.participant}>{firstParticipant}</div>
            <span>{counter1}</span>
            <span>vs</span>
            <span>{counter2}</span>
            <div className={styles.participant}>{secondParticipant}</div>
        </div>
    );
};

export default QualificationPairParticipants;
