import React from 'react';
import styles from './GroupStage.module.scss'
import GroupCard from "./GroupCard";

const GroupStage = () => {
    return (
        <>
            <div className={styles.group_stage}>
                <GroupCard
                    groupName='A'
                    team_1='МГАФК'
                    team_2="ТПО ЮЗАО SQUAD"
                    team_3='Мир.Труд.Май'
                    team_4='GodEitherYou'
                    team_1_points='3'
                    team_2_points='2'
                    team_3_points='1'
                    team_4_points='0'
                />
                <GroupCard
                    groupName='B'
                    team_1='CHuvSu'
                    team_2="RGUNG"
                    team_3='Team Vniia'
                    team_4='Fundament'
                    team_1_points='3'
                    team_2_points='2'
                    team_3_points='1'
                    team_4_points='0'
                />
                <GroupCard
                    groupName='C'
                    team_1='RKH-TU-1'
                    team_2="Gakuen.lesgaft"
                    team_3='Mospolytech 2.0'
                    team_4='Derzhawin'
                    team_1_points='3'
                    team_2_points='1'
                    team_3_points='1'
                    team_4_points='1'
                />
                <GroupCard
                    groupName='D'
                    team_1='MEI'
                    team_2="Котики. и vetal"
                    team_3='ПромИнн'
                    team_4='Matvei i ego komanda'
                    team_1_points='3'
                    team_2_points='2'
                    team_3_points='1'
                    team_4_points='0'
                />
            </div>
            <div className={styles.group_stage}>
                <GroupCard
                    groupName='E'
                    team_1='NKVD'
                    team_2="NEWHappy"
                    team_3='CosMOStars'
                    team_4='Hope die last'
                    team_1_points='3'
                    team_2_points='2'
                    team_3_points='1'
                    team_4_points='0'
                />
                <GroupCard
                    groupName='F'
                    team_1='XxXНекромантыXxX'
                    team_2="AG"
                    team_3='Ayy lmao'
                    team_4='Owls'
                    team_1_points='3'
                    team_2_points='1'
                    team_3_points='1'
                    team_4_points='1'
                />
                <GroupCard
                    groupName='G'
                    team_1='МТУСИ'
                    team_2="CyberRejects"
                    team_3='Atlantic'
                    team_4='KS#54'
                    team_1_points='3'
                    team_2_points='2'
                    team_3_points='1'
                    team_4_points='0'
                />
                <GroupCard
                    groupName='H'
                    team_1='Bauman Esports'
                    team_2="Ranepa"
                    team_3='Pelmennaya'
                    team_1_points='2'
                    team_2_points='1'
                    team_3_points='0'
                />
            </div>
        </>
    );
};

export default GroupStage;
