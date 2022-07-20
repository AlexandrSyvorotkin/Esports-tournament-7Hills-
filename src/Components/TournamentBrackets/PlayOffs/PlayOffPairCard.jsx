import React from 'react';
import styles from './PlayOffPairCard.module.scss'

const PlayOffPairCard = ({team_1, team_2, score_1, score_2, team_1_win, team_2_win}) => {
    return (
        <div className={styles.playOffPairCard}>
            <div className={team_1_win ? `${styles.team} + ${styles.win}` : `${styles.team}`}>
                <span>{team_1}</span>
                <span>{score_1}</span>
            </div>
            <div className={team_2_win ? `${styles.team} + ${styles.win}` : `${styles.team}`}>
                <span>{team_2}</span>
                <span>{score_2}</span>
            </div>
        </div>
    );
};

export default PlayOffPairCard;
