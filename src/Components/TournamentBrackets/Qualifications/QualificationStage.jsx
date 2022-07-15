import React from 'react';
import QualificationPairParticipants from "../Qualifications/QualificationPairParticipants";
import styles from './QualificationStage.module.scss'

const QualificationStage = () => {

    const pairParticipants = [
        {
            team_1: 'Дотаинвест',
            team_2: 'ayy lmao',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'Durka_Gaming',
            team_2: 'Ranepa',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'Gakuen_Lasgaft',
            team_2: 'apple chapman',
            team_1_score: '1',
            team_2_score: '0',
            team_1_win: true,
            team_2_win: false
        },
        {
            team_1: 'CyberBonch',
            team_2: 'МТУСИ',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'IC',
            team_2: 'NewHappy',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'RGUNG',
            team_2: 'Hangovers',
            team_1_score: '1',
            team_2_score: '0',
            team_1_win: true,
            team_2_win: false
        },
        {
            team_1: 'MSPU',
            team_2: 'Bauman Esports',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'Team Heterosis',
            team_2: 'GodEitheryou',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'CosMoStars',
            team_2: 'begolagi',
            team_1_score: '1',
            team_2_score: '0',
            team_1_win: true,
            team_2_win: false
        },
        {
            team_1: '3000buks',
            team_2: 'Atlantic',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'MGIMO',
            team_2: 'Gakuen.Lesgaft',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'Matvei i ego',
            team_2: 'Champions',
            team_1_score: '1',
            team_2_score: '0',
            team_1_win: true,
            team_2_win: false
        },
        {
            team_1: 'Press F',
            team_2: 'RKH-TU-1',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'Mospolytech ren',
            team_2: 'Pelmennaya',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'Owls',
            team_2: 'MIT',
            team_1_score: '1',
            team_2_score: '0',
            team_1_win: true,
            team_2_win: false
        },
        {
            team_1: 'Котики. и vetal',
            team_2: 'Energy',
            team_1_score: '1',
            team_2_score: '0',
            team_1_win: true,
            team_2_win: false
        },
        {
            team_1: 'CyberRejects',
            team_2: 'ПочтиSpirit',
            team_1_score: '1',
            team_2_score: '0',
            team_1_win: true,
            team_2_win: false
        },
        {
            team_1: 'AG',
            team_2: 'Trash',
            team_1_score: '1',
            team_2_score: '0',
            team_1_win: true,
            team_2_win: false
        },
        {
            team_1: 'ЮЗАО SQUAD',
            team_2: 'CyberHSE',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'Andromeda',
            team_2: 'МИР.ТРУ.МАЙ',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'TG.BERGUT',
            team_2: 'Derzhawin',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'HristosVoskres',
            team_2: 'Hope die last',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'Foundament',
            team_2: 'X5',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'Svibteams',
            team_2: 'KS #54',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'ПромИнн',
            team_2: 'Santrope',
            team_1_score: '1',
            team_2_score: '0',
            team_1_win: true,
            team_2_win: false
        },
        {
            team_1: 'Orion',
            team_2: 'МГАФК',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'Пушки Лаврушки',
            team_2: 'Mospolytech 2.0',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'Некроманты',
            team_2: 'Rgung Esports',
            team_1_score: '1',
            team_2_score: '0',
            team_1_win: true,
            team_2_win: false
        },
        {
            team_1: 'Enjoyers',
            team_2: 'MEI',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
        {
            team_1: 'NKVD',
            team_2: 'VPR',
            team_1_score: '1',
            team_2_score: '0',
            team_1_win: true,
            team_2_win: false
        },
        {
            team_1: 'CHuvSU',
            team_2: 'BBC',
            team_1_score: '1',
            team_2_score: '0',
            team_1_win: true,
            team_2_win: false
        },
        {
            team_1: 'Team VNIIA',
            team_2: 'RKS_MiG',
            team_1_score: '0',
            team_2_score: '1',
            team_1_win: false,
            team_2_win: true
        },
    ]


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
                />)}
            </div>
            <div className={styles.qualification_stage_wrapper}>
                {secondSegmentOfQulifications.map(pair =>
                    <QualificationPairParticipants
                        firstParticipant={pair.team_1}
                        secondParticipant={pair.team_2}
                        counter1={pair.team_1_score}
                        counter2={pair.team_2_score}
                    />)}
            </div>
            <div className={styles.qualification_stage_wrapper}>
                {thirdSegmentOfQulifications.map(pair =>
                    <QualificationPairParticipants
                        firstParticipant={pair.team_1}
                        secondParticipant={pair.team_2}
                        counter1={pair.team_1_score}
                        counter2={pair.team_2_score}
                    />)}
            </div>
            <div className={styles.qualification_stage_wrapper}>
                {fouthSegmentOfQulifications.map(pair =>
                    <QualificationPairParticipants
                        firstParticipant={pair.team_1}
                        secondParticipant={pair.team_2}
                        counter1={pair.team_1_score}
                        counter2={pair.team_2_score}
                    />)}
            </div>
        </div>
    );
};

export default QualificationStage;
