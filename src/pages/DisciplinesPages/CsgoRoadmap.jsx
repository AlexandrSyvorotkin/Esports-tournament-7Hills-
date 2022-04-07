import React from 'react';
import styles from './CsgoRoadmap.module.scss'
import TournamentRoadMap from "../../Components/TournamentRoadMap";
import csgo from '../../Assets/img-for-roadmap/csgo.png'

const CsgoRoadmap = ({modalActive, setModalActive}) => {

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
                    <img src={csgo} alt=""/>
                </div>
                <h2>CS-GO Турнир Расписание</h2>
            </div>
            <TournamentRoadMap
                discipline={'CS-GO'}
                dates={dates}
                modalActive={modalActive}
                setModalActive={setModalActive}
                registrationPath={'/Esports-tournament-7Hills-/cs-go-registration'}
            />
        </>
    );
};

export default CsgoRoadmap;
