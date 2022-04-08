import React from 'react';
import styles from './AllRegistration.module.scss'
import dota from '../../Assets/img-for-disciplines/barathrum.png'
import csgo from '../../Assets/img-for-disciplines/csgo.png'
import valorant from '../../Assets/img-for-disciplines/valorant.png'
import fifa from '../../Assets/img-for-disciplines/fifa.png'
import ButtonModal from "../../UI/ButtonModal";
import {Link} from "react-router-dom";

const AllRegistration = () => {
    return (
        <div className={styles.registration}>
            <h2 className={styles.registration_header}>Регистрация</h2>
            <div className={styles.registration_wrapper}>
                <Link to='/dota-registration'>
                    <div className={styles.registration_card}>
                        <img src={dota} alt=""/>
                        <span>Dota 2</span>
                    </div>
                </Link>
                <Link to='/cs-go-registration'>
                    <div className={styles.registration_card}>
                        <img src={csgo} alt=""/>
                        <span>Cs:Go</span>
                    </div>
                </Link>
                <Link to='/valorant-registration'>
                    <div className={styles.registration_card}>
                        <img src={valorant} alt=""/>
                        <span>Valorant</span>
                    </div>
                </Link>
                <Link to='/fifa-registration'>
                    <div className={styles.registration_card}>
                        <img src={fifa} alt=""/>
                        <span>Fifa</span>
                    </div>
                </Link>
            </div>
            <div className={styles.registration_footer}>
                <Link to='/'><ButtonModal>Назад</ButtonModal></Link>
            </div>
        </div>
    );
};

export default AllRegistration;
