import React from 'react';
import styles from './FifaRoadmap.module.scss'
import TournamentRoadMap from "../../Components/TournamentRoadMap";
import fifa from '../../Assets/img-for-roadmap/fifa.png'

const FifaRoadmap = ({setModalActive, modalActive}) => {

    const dates = {
        qualification: '2 мая',
        groupStage: '2-6 мая',
        playoffs: '7-9 мая',
        final: '2 июня'
    }

    return (
        <div className={styles.fifa}>
            <TournamentRoadMap
                modalActive={modalActive}
                setModalActive={setModalActive}
                dates={dates}
                discipline={'FIFA'}
                img={fifa}
            />
        </div>
    );
};

export default FifaRoadmap;
