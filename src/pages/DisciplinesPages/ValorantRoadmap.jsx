import React from 'react';
import styles from './ValorantRoadmap.module.scss'
import TournamentRoadMap from "../../Components/TournamentRoadMap";
import valorant from '../../Assets/img-for-roadmap/valorant.png'

const ValorantRoadmap = ({modalActive, setModalActive}) => {

    const dates = {
        qualification: '2 мая',
        groupStage: '2-3 мая',
        playoffs: '8-10 мая',
        final: '11-13 июня'
    }

    return (
        <>
            <div className={styles.roadmap_header}>
                <div className={styles.roadmap_logo}>
                    <img src={valorant} alt=""/>
                </div>
                <h2>VALORANT Турнир Расписание</h2>
            </div>
            <TournamentRoadMap
                modalActive={modalActive}
                setModalActive={setModalActive}
                discipline={'VALORANT'}
                dates={dates}
                />
        </>
    );
};

export default ValorantRoadmap;
