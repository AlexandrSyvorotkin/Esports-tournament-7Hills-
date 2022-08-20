import React from 'react';
import styles from './RegulationHeader.module.scss'

const RegulationHeader = ({number, discipline}) => {
    return (
        <div className={styles.regulation_header}>
            <div className={styles.header}>
                <p>Приложение № {number}</p>
                <p>К положению о проведении</p>
                <p>Киберспортивного турнира «Семь холмов»</p>
            </div>
            <p className={styles.header_name}>Регламент проведения турнира по дисциплине «{discipline}» в рамках <br/>
                Киберспортивного турнира «Семь Холмов»</p>
        </div>
    );
};

export default RegulationHeader;