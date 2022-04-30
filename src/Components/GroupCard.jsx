import React from 'react';
import styles from './GroupCard.module.scss'

const GroupCard = () => {
    return (
        <div className={styles.group_card}>
            <span className={styles.group_card_number}>Группа</span>
            <div className={styles.team_list}>
                <li>Команда А</li>
                <li>Команда Б</li>
                <li>Команда В</li>
                <li>Команда С</li>
            </div>
        </div>
    );
};

export default GroupCard;
