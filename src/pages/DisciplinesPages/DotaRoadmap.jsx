import React from 'react';

import TournamentRoadMap from "../../Components/TournamentRoadMap";
import dota from '../../Assets/img-for-roadmap/dota2.png'
import styles from './DotaRoadmap.module.scss'
import Menu from "../../Components/Menu";
import HamburgerMenu from "../../Components/HamburgerMenu";

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
            />
        </>
    );
};

export default DotaRoadmap;
