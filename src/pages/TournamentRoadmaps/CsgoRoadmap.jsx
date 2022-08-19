import React from 'react';
import styles from './CsgoRoadmap.module.scss'
import csgo from '../../Assets/img-for-roadmap/csgo.png'
import csgoPosition from '../../positions/csgo.doc'
import TournamentRoadMap from "../../Components/TournamentRoadmap/TournamentRoadMap";
import HamburgerMenu from "../../Components/Menus/HamburgerMenu/HamburgerMenu";
import Menu from "../../Components/Menus/SideMenu/Menu";

const CsgoRoadmap = ({modalActive, setModalActive}) => {

    const dates = {
        qualification: '2 мая',
        groupStage: '3-6 мая',
        playoffs: '7-9 мая',
        final: '27 мая'
    }
    return (
        <div className={styles.wrapper}>
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
                registrationPath={'/cs-go-registration'}
                positionPath={csgoPosition}
                positionDoc={'csgo.doc'}
            />
            <HamburgerMenu/>
            <Menu/>
        </div>
    );
};

export default CsgoRoadmap;
