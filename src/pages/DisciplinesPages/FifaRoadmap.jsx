import React from 'react';
import styles from './FifaRoadmap.module.scss'
import TournamentRoadMap from "../../Components/TournamentRoadMap";
import fifa from '../../Assets/img-for-roadmap/fifa.png'
import fifaPosition from '../../positions/Fifa.doc'

const FifaRoadmap = ({setModalActive, modalActive}) => {

    const dates = {
        qualification: '2 мая',
        groupStage: '2-6 мая',
        playoffs: '7-9 мая',
        final: '2 июня'
    }

    return (
        <>
            <div className={styles.roadmap_header}>
                <div className={styles.roadmap_logo}>
                    <img src={fifa} alt=""/>
                </div>
                <h2>FIFA Турнир Расписание</h2>
            </div>
            <TournamentRoadMap
                modalActive={modalActive}
                setModalActive={setModalActive}
                dates={dates}
                discipline={'FIFA'}
                registrationPath={'/fifa-registration'}
                positionDoc={'fifa.doc'}
                positionPath={fifaPosition}
            />
        </>
    );
};

export default FifaRoadmap;
