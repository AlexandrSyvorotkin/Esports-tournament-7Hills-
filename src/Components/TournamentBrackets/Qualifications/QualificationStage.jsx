import React from 'react';
import QualificationPairParticipants from "../Qualifications/QualificationPairParticipants";
import styles from './QualificationStage.module.scss'
import {pairParticipants} from "../../../data-base/date-for-brackets/dota/qualification";

const QualificationStage = () => {

    const firstSegmentOfQualifications = pairParticipants.slice(0, 8)
    const secondSegmentOfQulifications = pairParticipants.slice(8, 16)
    const thirdSegmentOfQulifications = pairParticipants.slice(16, 24)
    const fouthSegmentOfQulifications = pairParticipants.slice(24, 32)

    return (
        <div className={styles.qulifications}>
            <div className={styles.qualification_stage_wrapper}>
            {firstSegmentOfQualifications.map(pair =>
                <QualificationPairParticipants
                    firstParticipant={pair.team_1}
                    secondParticipant={pair.team_2}
                    counter1={pair.team_1_score}
                    counter2={pair.team_2_score}
                    team_1_win={pair.team_1_win}
                    team_2_win={pair.team_2_win}
                />)}
            </div>
            <div className={styles.qualification_stage_wrapper}>
                {secondSegmentOfQulifications.map(pair =>
                    <QualificationPairParticipants
                        firstParticipant={pair.team_1}
                        secondParticipant={pair.team_2}
                        counter1={pair.team_1_score}
                        counter2={pair.team_2_score}
                        team_1_win={pair.team_1_win}
                        team_2_win={pair.team_2_win}
                    />)}
            </div>
            <div className={styles.qualification_stage_wrapper}>
                {thirdSegmentOfQulifications.map(pair =>
                    <QualificationPairParticipants
                        firstParticipant={pair.team_1}
                        secondParticipant={pair.team_2}
                        counter1={pair.team_1_score}
                        counter2={pair.team_2_score}
                        team_1_win={pair.team_1_win}
                        team_2_win={pair.team_2_win}
                    />)}
            </div>
            <div className={styles.qualification_stage_wrapper}>
                {fouthSegmentOfQulifications.map(pair =>
                    <QualificationPairParticipants
                        firstParticipant={pair.team_1}
                        secondParticipant={pair.team_2}
                        counter1={pair.team_1_score}
                        counter2={pair.team_2_score}
                        team_1_win={pair.team_1_win}
                        team_2_win={pair.team_2_win}
                    />)}
            </div>
        </div>
    );
};

export default QualificationStage;
