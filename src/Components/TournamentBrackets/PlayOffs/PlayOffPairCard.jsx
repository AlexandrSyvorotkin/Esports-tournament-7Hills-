import React from 'react';
import styles from './PlayOffPairCard.module.scss'
import clsx from "classnames";

const PlayOffPairCard = ({team_1, team_2, score_1, score_2, team_1_win, team_2_win}) => {

    const classes = clsx(styles.team, {
        [styles.win]: team_1_win,
    })

    const classes2 = clsx(styles.team, {
        [styles.win]: team_2_win,
    })

    return (
        <div className={styles.playOffPairCard}>
            <div className={classes}>
                <span>{team_1}</span>
                <span>{score_1}</span>
            </div>
            <div className={classes2}>
                <span>{team_2}</span>
                <span>{score_2}</span>
            </div>
        </div>
    );
};

export default PlayOffPairCard;
