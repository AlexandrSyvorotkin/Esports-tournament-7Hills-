import React from 'react';
import styles from './AllRegistration.module.scss'
import dota from '../../Assets/img-for-disciplines/barathrum.png'
import csgo from '../../Assets/img-for-disciplines/csgo.png'
import valorant from '../../Assets/img-for-disciplines/valorant.png'
import fifa from '../../Assets/img-for-disciplines/fifa.png'
import ButtonModal from "../../UI/ButtonModal";
import {Link} from "react-router-dom";
import RegistrationCard from "../../Components/RegistrationCard";

const AllRegistration = () => {

    const RegistrationCards = [
        {
            path: '/dota-registration',
            image: dota,
            name: 'Dota'
        },
        {
            path: '/cs-go-registration',
            image: csgo,
            name: 'CS:GO'
        },
        {
            path: '/valorant-registration',
            image: valorant,
            name: 'Valorant'
        },
        {
            path: '/fifa-registration',
            image: fifa,
            name: 'Fifa'
        },
    ]


    return (
        <div className={styles.registration}>
            <h2 className={styles.registration_header}>Регистрация</h2>
            <div className={styles.registration_wrapper}>
                {RegistrationCards.map(card => (
                    <RegistrationCard
                        registrationPath={card.path}
                        registrationName={card.name}
                        registrationImage={card.image}
                        key={card.name}
                    />
                ))}
            </div>
            <div className={styles.registration_footer}>
                <Link to='/'><ButtonModal>Назад</ButtonModal></Link>
            </div>
        </div>
    );
};

export default AllRegistration;
