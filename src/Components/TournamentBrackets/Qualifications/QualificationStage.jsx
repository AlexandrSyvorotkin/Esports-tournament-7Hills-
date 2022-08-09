import React from 'react';
import styles from './QualificationStage.module.scss'
import {dotaQualification} from "../../../data-base/date-for-brackets/dota/qualification";
import QualificationItem from "./QualificationItem";


//TODO: добавить активлый элемент при роутинге

const QualificationStage = () => {

    console.log(dotaQualification[0].participants[1])


    const firstSegmentOfQualifications = dotaQualification.slice(0, 8)
    const secondSegmentOfQulifications = dotaQualification.slice(8, 16)
    const thirdSegmentOfQulifications = dotaQualification.slice(16, 24)
    const fouthSegmentOfQulifications = dotaQualification.slice(24, 33)

    return (
        <div className={styles.qualifications}>
            <div className={styles.wrapper}>
                <div className={styles.segments}>
                    {firstSegmentOfQualifications.map(pair => <QualificationItem
                            team_one_name={pair.participants[0]}
                            team_two_name={pair.participants[1]}
                            team_one_points={pair.points[0]}
                            team_two_points={pair.points[1]}
                            team_one_win={pair.member_one_win}
                            team_two_win={pair.member_two_win}
                        />
                    )}
                </div>
                <div className={styles.segments}>
                    {secondSegmentOfQulifications.map(pair => <QualificationItem
                            team_one_name={pair.participants[0]}
                            team_two_name={pair.participants[1]}
                            team_one_points={pair.points[0]}
                            team_two_points={pair.points[1]}
                            team_one_win={pair.member_one_win}
                            team_two_win={pair.member_two_win}
                        />
                    )}
                </div>
                <div className={styles.segments}>
                    {thirdSegmentOfQulifications.map(pair => <QualificationItem
                            team_one_name={pair.participants[0]}
                            team_two_name={pair.participants[1]}
                            team_one_points={pair.points[0]}
                            team_two_points={pair.points[1]}
                            team_one_win={pair.member_one_win}
                            team_two_win={pair.member_two_win}
                        />
                    )}
                </div>
                <div className={styles.segments}>
                    {fouthSegmentOfQulifications.map(pair => <QualificationItem
                            team_one_name={pair.participants[0]}
                            team_two_name={pair.participants[1]}
                            team_one_points={pair.points[0]}
                            team_two_points={pair.points[1]}
                            team_one_win={pair.member_one_win}
                            team_two_win={pair.member_two_win}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default QualificationStage;
