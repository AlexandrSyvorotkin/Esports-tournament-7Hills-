import React from 'react';
import styles from './GroupStage.module.scss'
import GroupCard from "../GroupCard";

const GroupStage = () => {
    return (
        <>
            <div className={styles.group_stage}>
                <GroupCard/>
                <GroupCard/>
                <GroupCard/>
                <GroupCard/>
            </div>
            <div className={styles.group_stage}>
                <GroupCard/>
                <GroupCard/>
                <GroupCard/>
                <GroupCard/>
            </div>
        </>
    );
};

export default GroupStage;
