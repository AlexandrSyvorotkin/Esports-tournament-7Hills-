import React from 'react';
import styles from './Docs.module.scss'
import {Link, NavLink, Route, Routes} from "react-router-dom";
import MainPosition from "../../../Components/Docs/Position/MainPosition";
import DotaRegulation from "../../../Components/Docs/Regulations/DotaRegulation/DotaRegulation";
import ValorantRegulation from "../../../Components/Docs/Regulations/ValorantRegulation/ValorantRegulation";
import CsGoRegulation from "../../../Components/Docs/Regulations/CsGoRegulation/CsGoRegulation";
import FifaRegulation from "../../../Components/Docs/Regulations/FifaRegulation/FifaRegulation";

// TODO: Фиксированную шапку
//TODO: Адаптив
//TODO: Оптимизировать всю папку Regulations дабы избежать дубликатов стилей

const Docs = () => {

    const setActiveLink = ({isActive}) => isActive ? `${styles.active_link}` : ''

    return (
        <div className={styles.positions}>
            <h2>Регламенты</h2>
            <div className={styles.positions_menu}>
                <li><NavLink to='position' className={setActiveLink}>Общее положение</NavLink></li>
                <li><NavLink to='valorantregulation' className={setActiveLink}>Регламент Valorant</NavLink></li>
                <li><NavLink to='dotaregulation' className={setActiveLink}>Регламент Дота 2</NavLink></li>
                <li><NavLink to='csgoregulation' className={setActiveLink}>Регламент CS:GO</NavLink></li>
                <li><NavLink to='fifaregulation' className={setActiveLink}>Регламент FIFA 2022</NavLink></li>
                <li><Link to='/'>Назад</Link></li>
            </div>

            <Routes>
                <Route path='position' element={<MainPosition/>}/>}/>
                <Route path='dotaregulation' element={<DotaRegulation/>}/>}/>
                <Route path='valorantregulation' element={<ValorantRegulation/>}/>}/>
                <Route path='csgoregulation' element={<CsGoRegulation/>}/>}/>
                <Route path='fifaregulation' element={<FifaRegulation/>}/>}/>
            </Routes>
        </div>
    );
};

export default Docs;
