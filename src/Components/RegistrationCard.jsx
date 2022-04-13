import React from 'react';
import styles from './RegistrationCard.module.scss'
import {Link} from "react-router-dom";

const RegistrationCard = ({registrationPath, registrationImage, registrationName}) => {
    return (
        <Link to={registrationPath}>
            <div className={styles.registration_card}>
                <img src={registrationImage} alt=""/>
                <div className={styles.registration_card_info}>
                    <span>{registrationName}</span>
                </div>
            </div>
        </Link>
    );
};

export default RegistrationCard;
