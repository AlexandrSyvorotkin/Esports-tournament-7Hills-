import React from 'react';
import PlayOffPairCard from "./PlayOffPairCard";
import styles from './PlatOffs.module.scss'
import {dotaPlayoffs} from '../../../data-base/date-for-brackets/dota/playoff'

const PlayoffStage = () => {

    const {round_one, quarterfinal, semifinal, final} = dotaPlayoffs

    return (
        <div className={styles.playoff_stage}>
            <div className={styles.stages}>
                <span>1/8 Финала</span>
                <span>1/4 Финала</span>
                <span>1/2 Финала</span>
                <span>Финал</span>
            </div>
            <div className={styles.playOffRounds}>
                <div className={styles.bracket_block}>
                    {round_one.map(pair =>
                        <PlayOffPairCard
                            id={pair.id}
                            team_1={pair.participants[0]}
                            team_2={pair.participants[1]}
                            score_1={pair.score[0]}
                            score_2={pair.score[1]}
                            team_1_win={pair.team_1_win}
                            team_2_win={pair.team_2_win}
                        />
                    )}
                </div>
                <div className={styles.bracket_block}>
                    {quarterfinal.map(pair =>
                        <PlayOffPairCard
                            id={pair.id}
                            team_1={pair.participants[0]}
                            team_2={pair.participants[1]}
                            score_1={pair.score[0]}
                            score_2={pair.score[1]}
                            team_1_win={pair.team_1_win}
                            team_2_win={pair.team_2_win}
                        />
                    )}
                </div>
                <div className={styles.bracket_block}>
                    {semifinal.map(pair =>
                        <PlayOffPairCard
                            id={pair.id}
                            team_1={pair.participants[0]}
                            team_2={pair.participants[1]}
                            score_1={pair.score[0]}
                            score_2={pair.score[1]}
                            team_1_win={pair.team_1_win}
                            team_2_win={pair.team_2_win}
                        />
                    )}
                </div>
                <div className={styles.bracket_block}>
                    {final.map(pair =>
                        <PlayOffPairCard
                            id={pair.id}
                            team_1={pair.participants[0]}
                            team_2={pair.participants[1]}
                            score_1={pair.score[0]}
                            score_2={pair.score[1]}
                            team_1_win={pair.team_1_win}
                            team_2_win={pair.team_2_win}
                        />
                    )}
                </div>
            </div>

        </div>
    );
};

export default PlayoffStage;
