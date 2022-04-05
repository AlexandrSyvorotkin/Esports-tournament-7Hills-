import React, {useState} from 'react';
import styles from './SingleDiscipline.module.scss'
import Arrow from '../../Assets/whiteArrow.svg'
import {motion} from 'framer-motion'
import {Link} from "react-router-dom";
import ButtonSecondaty from "../../UI/ButtonSecondaty";

const SingleDiscipline = ({DisciplineName, img, RoutingPath}) => {

    const [hoverEffect, setHoverEffect] = useState(false)


    return (
        <div className={styles.single_discipline}
             // onMouseEnter={()=> setHoverEffect(true)}
             // onMouseLeave={()=> setHoverEffect(false)}
            >
            <img className={styles.single_discipline_image} src={img} alt=""/>
            {!hoverEffect ?
                <Link to={RoutingPath}>{DisciplineName}</Link> :
                <motion.p
                    animate={{ y: -20 }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                >ПОДРОБНЕЕ
                </motion.p>}
            {/*<div className={styles.arrow}>*/}
            {/*    <img src={Arrow} alt=""/>*/}
            {/*</div>*/}
        </div>
    );
};

export default SingleDiscipline;
