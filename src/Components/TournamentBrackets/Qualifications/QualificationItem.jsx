import React from 'react';
import styles from './QualificationItem.module.scss'
import clsx from "classnames";

const QualificationItem = ({team_one_name, team_one_points, team_two_name,  team_two_points, team_one_win, team_two_win}) => {

    const classes = clsx(styles.pair, {
        [styles.win]: team_one_win,
    })

    const classes2 = clsx(styles.pair, {
        [styles.win]: team_two_win,
    })


    return (
        <div className={styles.qualificationItem}>
            <div className={classes}>{team_one_name}</div>
            <span>{team_one_points}</span>
            <span>vs</span>
            <span>{team_two_points}</span>
            <div className={classes2}>{team_two_name}</div>
        </div>
    );
};

export default QualificationItem;
