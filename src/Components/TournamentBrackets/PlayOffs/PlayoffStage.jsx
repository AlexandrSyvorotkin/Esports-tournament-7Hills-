import React from 'react';
import PlayOffPairCard from "./PlayOffPairCard";
import styles from './PlatOffs.module.scss'
import clsx from "classnames";
import {playOffs} from "../../../data-base/date-for-brackets/dota/playoff";

const PlayoffStage = () => {



    const {firstRound, quaterFinal, semifinal, thirdPlace, final} = playOffs

    const classes = clsx(styles.bracket_block, styles.quater)

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
                    {firstRound.map(pair =>
                        <PlayOffPairCard
                            key={pair.team_1}
                            team_1={pair.team_1}
                            team_2={pair.team_2}
                            score_1={pair.score_team_1}
                            score_2={pair.score_team_2}
                            team_1_win={pair.team_1_win}
                            team_2_win={pair.team_2_win}
                        />
                    )}
                </div>
                <div className={classes}>
                    {quaterFinal.map(pair =>
                        <PlayOffPairCard
                            key={pair.team_1}
                            team_1={pair.team_1}
                            team_2={pair.team_2}
                            score_1={pair.score_team_1}
                            score_2={pair.score_team_2}
                            team_1_win={pair.team_1_win}
                            team_2_win={pair.team_2_win}
                        />
                    )}
                </div>
                <div className={styles.bracket_block}>
                    {semifinal.map(pair =>
                        <PlayOffPairCard
                            key={pair.team_1}
                            team_1={pair.team_1}
                            team_2={pair.team_2}
                            score_1={pair.score_team_1}
                            score_2={pair.score_team_2}
                            team_1_win={pair.team_1_win}
                            team_2_win={pair.team_2_win}
                        />
                    )}
                </div>
                <div className={styles.bracket_block}>
                    {final.map(pair =>
                        <PlayOffPairCard
                            key={pair.team_1}
                            team_1={pair.team_1}
                            team_2={pair.team_2}
                            score_1={pair.score_team_1}
                            score_2={pair.score_team_2}
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
