import React from 'react';
import styles from './CsgoRoadmap.module.scss'
import TournamentRoadMap from "../../Components/TournamentRoadMap";

const CsgoRoadmap = ({modalActive, setModalActive}) => {

    const dates = {
        qualification: '2 мая',
        groupStage: '2-6 мая',
        playoffs: '7-9 мая',
        final: '2 июня'
    }
    return (
        <div className={styles.csgo}>
            <TournamentRoadMap
                discipline={'CS-GO'}
                dates={dates}
                modalActive={modalActive}
                setModalActive={setModalActive}
            />
        </div>
    );
};

export default CsgoRoadmap;
