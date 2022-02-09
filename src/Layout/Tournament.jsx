import React from 'react';
import styles from './Tournament.module.css'
import white_logo from '../Assets/white-logo.png'

const Tournament = () => {
    return (
        <div className={styles.tournament}>
                <p className={styles.esport}>Киберспортивный</p>
            <div className={styles.esport_name}>
                <p className={styles.esport_tournament}>ТУРНИР</p>
                <img className={styles.tournament_logo} src={white_logo} alt=""/>
            </div>
        </div>
    );
};

export default Tournament;