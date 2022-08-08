import React from 'react';
import styles from './GroupStage.module.scss'
import GroupCard from "./GroupCard";
import {groups} from "../../../data-base/date-for-brackets/dota/groups";
import {dotaGroups} from "../../../data-base/date-for-brackets/dota/groups";
import GroupItem from "./GroupItem";

const GroupStage = () => {
    console.log(dotaGroups)

    // const firstGruopSegment = groups.slice(0, 4)
    // const secondGroupSegment = groups.slice(4,8)
    return (
        <div className={styles.group_stage}>
            {dotaGroups.map(group => <GroupItem
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


// <>
//     <div className={styles.group_stage}>
//         {firstGruopSegment.map(group =>
//             <GroupCard
//                 key={group.groupName}
//                 groupName={group.groupName}
//                 team_1={group.team_1}
//                 team_2={group.team_2}
//                 team_3={group.team_3}
//                 team_4={group.team_4}
//                 team_1_points={group.team_1_points}
//                 team_2_points={group.team_2_points}
//                 team_3_points={group.team_3_points}
//                 team_4_points={group.team_4_points}
//             />
//         )}
//     </div>
//     <div className={styles.group_stage}>
//         {secondGroupSegment.map(group =>
//             <GroupCard
//                 key={group.groupName}
//                 groupName={group.groupName}
//                 team_1={group.team_1}
//                 team_2={group.team_2}
//                 team_3={group.team_3}
//                 team_4={group.team_4}
//                 team_1_points={group.team_1_points}
//                 team_2_points={group.team_2_points}
//                 team_3_points={group.team_3_points}
//                 team_4_points={group.team_4_points}
//             />
//         )}
//     </div>
// </>
