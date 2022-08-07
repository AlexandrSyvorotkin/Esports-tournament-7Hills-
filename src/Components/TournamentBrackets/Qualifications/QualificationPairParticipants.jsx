import React from 'react';
import styles from './QualificationPairParticipant.module.scss'
import clsx from "classnames";

const QualificationPairParticipants = ({firstParticipant, secondParticipant, counter1, counter2, team_1_win, team_2_win}) => {

    const classes = clsx(styles.participant, {
        [styles.win]: team_1_win,
    })

    const classes2 = clsx(styles.participant, {
        [styles.win]: team_2_win,
    })

    return (
        <div className={styles.gamePair}>
            <div className={classes}>{firstParticipant}</div>
            <span>{counter1}</span>
            <span>vs</span>
            <span>{counter2}</span>
            <div className={classes2}>{secondParticipant}</div>
        </div>
    );
};

export default QualificationPairParticipants;


