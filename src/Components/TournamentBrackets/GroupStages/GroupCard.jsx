import React from 'react';
import styles from './GroupCard.module.scss'

const GroupCard = ({groupName,
                       team_1, team_2, team_3, team_4,
                       team_1_points, team_2_points, team_3_points, team_4_points}) => {
    return (
        <div className={styles.group_card}>
            <span className={styles.group_card_number}>Группа {groupName}</span>
            <div className={styles.team_list}>
                <ul>
                    <div className={styles.group_card_content}><li>{team_1}</li><span>{team_1_points}</span></div>
                    <div className={styles.group_card_content}><li>{team_2}</li><span>{team_2_points}</span></div>
                    <div className={styles.group_card_content}><li>{team_3}</li><span>{team_3_points}</span></div>
                    <div className={styles.group_card_content}><li>{team_4}</li><span>{team_4_points}</span></div>
                </ul>
            </div>
        </div>
    );
};

export default GroupCard;
