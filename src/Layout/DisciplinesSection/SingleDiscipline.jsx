import React from 'react';
import styles from './SingleDiscipline.module.css'
import Arrow from '../../Assets/whiteArrow.svg'

const SingleDiscipline = ({DisciplineName}) => {
    return (
        <div className={styles.single_discipline} >
            <p>{DisciplineName}</p>
            <div className={styles.arrow}>
                <img src={Arrow} alt=""/>
            </div>
        </div>
    );
};

export default SingleDiscipline;
