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
        <div className={styles.valorant}>
            <TournamentRoadMap
                modalActive={modalActive}
                setModalActive={setModalActive}
                discipline={'VALORANT'}
                dates={dates}
                img={valorant}
                />
        </div>
    );
};

export default ValorantRoadmap;
