import React from 'react';
import styles from './GroupItem.module.scss'

const GroupItem = ({name, participants, points}) => {
    console.log(participants)
    return (
        <div className={styles.group_item}>
                <span>Группа: {name}</span>
                <div className={styles.wrapper}>
                    <div className={styles.participants}>
                        {participants.map(it=> <span>{it}</span>)}
                    </div>
                    <div className={styles.points}>
                        {points.map(it=> <span>{it}</span>)}
                    </div>
                </div>
        </div>
    );
};

export default GroupItem;