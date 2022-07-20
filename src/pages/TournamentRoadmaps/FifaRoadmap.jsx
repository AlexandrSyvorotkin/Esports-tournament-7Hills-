import React from 'react';
import styles from './FifaRoadmap.module.scss'
import fifa from '../../Assets/img-for-roadmap/fifa.png'
import fifaPosition from '../../positions/Fifa.doc'
import TournamentRoadMap from "../../Components/TournamentRoadmap/TournamentRoadMap";
import HamburgerMenu from "../../Components/Menus/HamburgerMenu/HamburgerMenu";
import Menu from "../../Components/Menus/SideMenu/Menu";

const FifaRoadmap = ({setModalActive, modalActive}) => {

    const dates = {
        qualification: '2 мая',
        groupStage: '3-6 мая',
        playoffs: '7-9 мая',
        final: '29 мая'
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
            <HamburgerMenu/>
            <Menu/>
        </>
    );
};

export default FifaRoadmap;
