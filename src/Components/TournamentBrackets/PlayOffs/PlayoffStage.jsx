import React from 'react';
import PlayOffPairCard from "./PlayOffPairCard";
import styles from './PlatOffs.module.scss'

const PlayoffStage = () => {

    const playOffs = {
        firstRound: [
            {
                team_1: 'МГАФК',
                team_2: 'Ranepa',
                score_team_1: '0',
                score_team_2: '1',
                team_1_win: false,
                team_2_win: true
            },
            {
                team_1: 'МТУСИ',
                team_2: 'RRUNG',
                score_team_1: '1',
                score_team_2: '0',
                team_1_win: true,
                team_2_win: false
            },
            {
                team_1: 'RKH-TU-1',
                team_2: 'AG',
                score_team_1: '1',
                score_team_2: '0',
                team_1_win: true,
                team_2_win: false
            },
            {
                team_1: 'NKVD',
                team_2: 'Котики. и vetal',
                score_team_1: '1',
                score_team_2: '0',
                team_1_win: true,
                team_2_win: false
            },
            {
                team_1: 'CHuvSU',
                team_2: 'CyberRejects',
                score_team_1: '0',
                score_team_2: '1',
                team_1_win: false,
                team_2_win: true
            },
            {
                team_1: 'Bauman Esports',
                team_2: 'ТПО ЮЗАО SQUAD',
                score_team_1: '0',
                score_team_2: '1',
                team_1_win: false,
                team_2_win: true
            },
            {
                team_1: 'MEI',
                team_2: 'NEWHappy',
                score_team_1: '0',
                score_team_2: '1',
                team_1_win: false,
                team_2_win: true
            },
            {
                team_1: 'xXxНекромантыxXx',
                team_2: 'Gakuen.lesgaft',
                score_team_1: '1',
                score_team_2: '0',
                team_1_win: true,
                team_2_win: false
            }
        ],
        quaterFinal: [
            {
                team_1: 'Ranepa',
                team_2: 'МТУСИ',
                score_team_1: '2',
                score_team_2: '0',
                team_1_win: true,
                team_2_win: false
            },
            {
                team_1: 'RKH-TU-1',
                team_2: 'NKVD',
                score_team_1: '0',
                score_team_2: '2',
                team_1_win: false,
                team_2_win: true
            },
            {
                team_1: 'CyberRejects',
                team_2: 'ТПО ЮЗАО SQUAD',
                score_team_1: '1',
                score_team_2: '2',
                team_1_win: false,
                team_2_win: true
            },
            {
                team_1: 'NEWHappy',
                team_2: 'xXxНекромантыxXx',
                score_team_1: '0',
                score_team_2: '2',
                team_1_win: false,
                team_2_win: true
            },
        ],
        semifinal: [
            {
                team_1: 'Ranepa',
                team_2: 'NKVD',
                score_team_1: '0',
                score_team_2: '2',
                team_1_win: false,
                team_2_win: true
            },
            {
                team_1: 'ТПО ЮЗАО SQUAD',
                team_2: 'xXxНекромантыxXx',
                score_team_1: '0',
                score_team_2: '2',
                team_1_win: false,
                team_2_win: true
            },
        ],
        final: [
            {
                team_1: 'NKVD',
                team_2: 'xXxНекромантыxXx',
                score_team_1: '3',
                score_team_2: '1',
                team_1_win: true,
                team_2_win: false
            }
        ],
        thirdPlace: [
            {
                team_1: 'Ranepa',
                team_2: 'ТПО ЮЗАО SQUAD',
                score_team_1: '3',
                score_team_2: '0',
                team_1_win: true,
                team_2_win: false
            }
        ]
    }

    const {firstRound, quaterFinal, semifinal, thirdPlace, final} = playOffs


    return (
        <div className={styles.playOffStage}>
            <div className={styles.playOffRounds}>
                <div className={styles.bracket_block}>
                    <span>1/8 Финала</span>
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
                <div className={styles.bracket_block}>
                    <span>1/4 Финала</span>
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
                    <span>1/2 Финала</span>
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
                    <span>Финал</span>
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
