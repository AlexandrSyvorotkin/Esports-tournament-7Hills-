import React from 'react';
import styles from './Positions.module.scss'
import {Link, Route, Routes} from "react-router-dom";
import RegulationCard from "../../../Components/Regulations/RegulationCard";
import DotaRegulations from "../../../Components/Regulations/DotaRegulations";
import CsGoRegulations from "../../../Components/Regulations/Cs-go regulations";
import FifaRegulations from "../../../Components/Regulations/FifaRegulations";
import ValorantRegulations from "../../../Components/Regulations/ValorantRegulations";

const Positions = () => {

    const Regulation = [
        {
            name: 'Dota2',
            img: null,
            path: 'dota-regulation'
        },
        {
            name: 'Valorant',
            img: null,
            path: 'valorant-regulation'
        },
        {
            name: 'cs-go',
            img: null,
            path: 'csgo-regulation'
        },
        {
            name: 'FIFA22',
            img: null,
            path: 'fifa-regulation'
        },
    ]


    return (
        <>
            <div className={styles.positions_header}>Положения</div>
            <div className={styles.positions}>
                <div className={styles.positions_choice}>
                    <ul>
                        {Regulation.map(it => (
                            <li>
                                <RegulationCard img={it.img} regulationPath={it.path} cardName={it.name}/>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className={styles.regulations}>
                    <Routes>
                        <Route path='dota-regulation' element={<DotaRegulations/>}/>
                        <Route path='csgo-regulation' element={<CsGoRegulations/>}/>
                        <Route path='fifa-regulation' element={<FifaRegulations/>}/>
                        <Route path='valorant-regulation' element={<ValorantRegulations/>}/>
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default Positions;
