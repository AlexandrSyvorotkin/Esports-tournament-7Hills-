import React from 'react';
import styles from './SingleDiscipline.module.scss'
import {Link} from "react-router-dom";

const SingleDiscipline = ({DisciplineName, img, RoutingPath}) => {


    return (
        <Link className={styles.single_discipline}
              to={RoutingPath}
            >
            <img className={styles.single_discipline_image} src={img} alt=""/>
            <span  className={styles.link}>{DisciplineName}</span>
        </Link>
    );
};

export default SingleDiscipline;
