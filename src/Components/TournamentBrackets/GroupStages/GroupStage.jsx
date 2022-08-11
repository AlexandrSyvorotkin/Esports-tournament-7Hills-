import React from 'react';
import styles from './GroupStage.module.scss'
import GroupItem from "./GroupItem";

//TODO:Доделать групповую стадию

const GroupStage = ({groups}) => {

    return (
        <div className={styles.group_stage}>
            {groups.map(group => <GroupItem
                key={group.group}
                name={group.group}
                participants={group.participants}
                points={group.points}
            />
            )}
        </div>
    );
};

export default GroupStage;
