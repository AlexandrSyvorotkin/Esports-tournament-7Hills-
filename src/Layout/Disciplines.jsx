import React from 'react';
import styles from './Disciplines.module.css'
import Arrow from '../Assets/whiteArrow.svg'
import HamburgerMenu from "../Components/HamburgerMenu";
import {Link} from "react-router-dom";

const Disciplines = () => {

    return (
        <div className={styles.disciplines}>
            <div className={styles.dota} >
                <Link to='/dota'>Dota2</Link>
                <div className={styles.arrow}>
                    <img src={Arrow} alt=""/>
                </div>
            </div>
            <div className={styles.csgo}>
                <Link to='/csgo'>CSGO</Link>
                <div className={styles.arrow}>
                    <img src={Arrow} alt=""/>
                </div>
            </div>
            <div className={styles.valorant}>
                <Link to='/valorant'>Valorant</Link>
                <div className={styles.arrow}>
                    <img src={Arrow} alt=""/>
                </div>
            </div>
            <div className={styles.fifa}>
                <Link to='/fifa'>Fifa</Link>
                <div className={styles.arrow}>
                    <img src={Arrow} alt=""/>
                </div>
            </div>
            <HamburgerMenu/>
        </div>
    );
};

export default Disciplines;
