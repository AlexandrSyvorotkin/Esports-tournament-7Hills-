import React from 'react';

import TournamentRoadMap from "../../Components/TournamentRoadMap";
import dota from '../../Assets/img-for-roadmap/dota2.png'
import styles from './DotaRoadmap.module.scss'

import dotaPosition from '../../positions/Dota.doc'

const DotaRoadmap = ({modalActive, setModalActive, menuActive, setMenuActive}) => {

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
                    <img src={dota} alt=""/>
                </div>
                <h2>DOTA Турнир Расписание</h2>
            </div>
            <TournamentRoadMap
                modalActive={modalActive}
                setModalActive={setModalActive}
                discipline={'Dota'}
                dates={dates}
                registrationPath={'/dota-registration'}
                positionPath={dotaPosition}
                positionDoc={"dota.doc"}
            />
        </>
    );
};

export default DotaRoadmap;
