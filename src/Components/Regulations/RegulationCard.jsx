import React from 'react';
import styles from './RegulationCard.module.scss'
import {Link} from "react-router-dom";

const RegulationCard = ({img, cardName, regulationPath}) => {
    return (
        <Link className={styles.regulation_card} to={regulationPath}>
            <div className={styles.regulation_card_img}>
                <img src={img} alt=""/>
            </div>
            <div className={styles.regulation_card_name}>{cardName}</div>
        </Link>
    );
};

export default RegulationCard;
