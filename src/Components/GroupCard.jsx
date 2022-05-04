import React from 'react';
import styles from './GroupCard.module.scss'

const GroupCard = () => {
    return (
        <div className={styles.group_card}>
            <span className={styles.group_card_number}>Группа</span>
            <div className={styles.team_list}>
                <ul>
                    <div className={styles.group_card_content}><li>Команда А</li><span>5</span></div>
                    <div className={styles.group_card_content}><li>Команда Б</li><span>3</span></div>
                    <div className={styles.group_card_content}><li>Команда В</li><span>2</span></div>
                    <div className={styles.group_card_content}><li>Команда С</li><span>1</span></div>
                </ul>
            </div>
        </div>
    );
};

export default GroupCard;
