import React from 'react';
import styles from './ValorantRoadmap.module.scss'
import valorant from '../../Assets/img-for-roadmap/valorant.png'

import valorantPosition from '../../positions/Valorant.doc'
import TournamentRoadMap from "../../Components/TournamentRoadmap/TournamentRoadMap";
import HamburgerMenu from "../../Components/Menus/HamburgerMenu/HamburgerMenu";
import Menu from "../../Components/Menus/SideMenu/Menu";

const ValorantRoadmap = ({modalActive, setModalActive}) => {

    const dates = {
        qualification: '11 мая',
        groupStage: '12-15 мая',
        playoffs: '16-18 мая',
        final: '29 мая'
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
                discipline='VALORANT'
                dates={dates}
                registrationPath='/valorant-registration'
                positionPath={valorantPosition}
                positionDoc='Valorant.doc'
                />
            <HamburgerMenu/>
            <Menu/>
        </>
    );
};

export default ValorantRoadmap;
