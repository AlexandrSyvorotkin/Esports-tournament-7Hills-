import React, {useState} from 'react';
import styles from './SingleDiscipline.module.scss'
import Arrow from '../../Assets/whiteArrow.svg'
import {motion} from 'framer-motion'
import {Link} from "react-router-dom";
import ButtonSecondary from "../../UI/ButtonSecondary";

const SingleDiscipline = ({DisciplineName, img, RoutingPath}) => {

    return (
        <div className={styles.single_discipline}>
            <img className={styles.single_discipline_image} src={img} alt=""/>
                <Link to={RoutingPath}>{DisciplineName}</Link>
        </div>
    );
};

export default SingleDiscipline;
