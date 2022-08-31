import React from 'react';
import styles from './Docs.module.scss'
import {NavLink, Route, Routes} from "react-router-dom";

// Import components
import MainPosition from "../../../Components/Docs/Position/MainPosition";
import DotaRegulation from "../../../Components/Docs/Regulations/DotaRegulation/DotaRegulation";
import ValorantRegulation from "../../../Components/Docs/Regulations/ValorantRegulation/ValorantRegulation";
import CsGoRegulation from "../../../Components/Docs/Regulations/CsGoRegulation/CsGoRegulation";
import FifaRegulation from "../../../Components/Docs/Regulations/FifaRegulation/FifaRegulation";
import ScrollToTop from "../../../Components/ScrollToTop";
//

// import menu
import Menu from "../../../Components/Menus/SideMenu/Menu";
import HamburgerMenu from "../../../Components/Menus/HamburgerMenu/HamburgerMenu";
//

import dotaIcon from '../../../Assets/img-for-roadmap/dota2.png'
import valorantIcon from '../../../Assets/img-for-roadmap/valorant.png'

//TODO: Адаптив
//TODO: Оптимизировать всю папку Regulations дабы избежать дубликатов стилей
//TODO: Сделать логотипы на роутинг вместо "кнопок"

const Docs = () => {

    const setActiveLink = ({isActive}) => isActive ? `${styles.active_link}` : ''

    const links = [
        {
            path: 'position',
            name: 'Общее положение'
        },
        {
            path: 'valorantregulation',
            name: 'Регламент Valorant'
        },
        {
            path: 'dotaregulation',
            name: 'Регламент Dota 2'
        },
        {
            path: 'csgoregulation',
            name: 'Регламент CS:GO'
        },
        {
            path: 'fifaregulation',
            name: 'Регламент FIFA 2022'
        },
    ]

    return (
        <div className={styles.positions}>
                <div className={styles.header}>
                    <h2>Нормативные документы</h2>
                    <ScrollToTop/>
                    <ul className={styles.positions_menu}>
                        {links.map(link =>
                            <li className={styles.positions_item}>
                                <NavLink className={setActiveLink}
                                         to={link.path}>
                                                <span/>
                                                <span/>
                                                <span/>
                                                <span/>
                                                {link.name}
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={styles.docs_wrapper}>
                    <Routes>
                        <Route path='position' element={<MainPosition/>}/>}/>
                        <Route path='dotaregulation' element={<DotaRegulation/>}/>}/>
                        <Route path='valorantregulation' element={<ValorantRegulation/>}/>}/>
                        <Route path='csgoregulation' element={<CsGoRegulation/>}/>}/>
                        <Route path='fifaregulation' element={<FifaRegulation/>}/>}/>
                    </Routes>
                </div>
                <Menu/>
                <HamburgerMenu/>
        </div>
    );
};

export default Docs;
