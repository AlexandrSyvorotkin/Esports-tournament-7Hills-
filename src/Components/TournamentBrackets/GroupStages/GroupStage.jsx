import React from 'react';
import styles from './GroupStage.module.scss'
import GroupCard from "./GroupCard";

const GroupStage = () => {

    const groups = [
        {
            groupName: 'A',
            team_1: 'МГАФК',
            team_2: "ТПО ЮЗАО SQUAD",
            team_3: 'Мир.Труд.Май',
            team_4: 'GodEitherYou',
            team_1_points: '3',
            team_2_points: '2',
            team_3_points: '1',
            team_4_points: '0',
        },
        {
            groupName: 'B',
            team_1: 'CHuvSu',
            team_2: "RGUNG",
            team_3: 'Team Vniia',
            team_4: 'Fundament',
            team_1_points: '3',
            team_2_points: '2',
            team_3_points: '1',
            team_4_points: '0',
        },
        {
            groupName: 'C',
            team_1: 'RKH-TU-1',
            team_2: "Gakuen.lesgaft",
            team_3: 'Mospolytech 2.0',
            team_4: 'Derzhawin',
            team_1_points: '3',
            team_2_points: '1',
            team_3_points: '1',
            team_4_points: '1',
        },
        {
            groupName: 'D',
            team_1: 'MEI',
            team_2: "Котики. и vetal",
            team_3: 'ПромИнн',
            team_4: 'Matvei i ego komanda',
            team_1_points: '3',
            team_2_points: '2',
            team_3_points: '1',
            team_4_points: '0'
        },
        {
            groupName: 'E',
            team_1: 'NKVD',
            team_2: "NEWHappy",
            team_3: 'CosMOStars',
            team_4: 'Hope die last',
            team_1_points: '3',
            team_2_points: '2',
            team_3_points: '1',
            team_4_points: '0',
        },
        {
            groupName: 'F',
            team_1: 'XxXНекромантыXxX',
            team_2: "AG",
            team_3: 'Ayy lmao',
            team_4: 'Owls',
            team_1_points: '3',
            team_2_points: '1',
            team_3_points: '1',
            team_4_points: '1',
        },
        {
            groupName: 'G',
            team_1: 'МТУСИ',
            team_2: "CyberRejects",
            team_3: 'Atlantic',
            team_4: 'KS#54',
            team_1_points: '3',
            team_2_points: '2',
            team_3_points: '1',
            team_4_points: '0'
        },
        {
            groupName:'H',
            team_1:'Bauman Esports',
            team_2:"Ranepa",
            team_3:'Pelmennaya',
            team_1_points:'2',
            team_2_points:'1',
            team_3_points:'0'
        }
    ]

    const firstGruopSegment = groups.slice(0, 4)
    const secondGroupSegment = groups.slice(4,8)

    return (
        <>
            <div className={styles.group_stage}>
                {firstGruopSegment.map(group =>
                    <GroupCard
                        key={group.groupName}
                        groupName={group.groupName}
                        team_1={group.team_1}
                        team_2={group.team_2}
                        team_3={group.team_3}
                        team_4={group.team_4}
                        team_1_points={group.team_1_points}
                        team_2_points={group.team_2_points}
                        team_3_points={group.team_3_points}
                        team_4_points={group.team_4_points}
                    />
                )}
            </div>
            <div className={styles.group_stage}>
                {secondGroupSegment.map(group =>
                    <GroupCard
                        key={group.groupName}
                        groupName={group.groupName}
                        team_1={group.team_1}
                        team_2={group.team_2}
                        team_3={group.team_3}
                        team_4={group.team_4}
                        team_1_points={group.team_1_points}
                        team_2_points={group.team_2_points}
                        team_3_points={group.team_3_points}
                        team_4_points={group.team_4_points}
                    />
                )}
            </div>
        </>
    );
};

export default GroupStage;
