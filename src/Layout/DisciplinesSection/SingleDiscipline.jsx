import React, {useState} from 'react';
import styles from './SingleDiscipline.module.scss'
import Arrow from '../../Assets/whiteArrow.svg'
import {motion} from 'framer-motion'

const SingleDiscipline = ({DisciplineName, img}) => {

    const [hoverEffect, setHoverEffect] = useState(false)


    return (
        <div className={styles.single_discipline}
             onMouseEnter={()=> setHoverEffect(true)}
             onMouseLeave={()=> setHoverEffect(false)}
            >
            <img className={styles.single_discipline_image} src={img} alt=""/>
            {!hoverEffect ?
                <p>{DisciplineName}</p> :
                <motion.p
                    animate={{ y: -20 }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                >ПОДРОБНЕЕ
                </motion.p>}
            <div className={styles.arrow}>
                <img src={Arrow} alt=""/>
            </div>
        </div>
    );
};

export default SingleDiscipline;
