import React from 'react';
import styles from './RegulationPart.module.scss'

const RegulationPart = ({name, number}) => {
    return (
        <div className={styles.regulation_part}>
            <div className={styles.regulation_img}>
                <img src="#" alt=""/>
            </div>
            <div className={styles.regulation_part_name}>
                <p>{number}</p><p>{name}</p>
            </div>
        </div>
    );
};

export default RegulationPart;
