import React from 'react';
import styles from './Disciplines.module.scss'
import SingleDiscipline from "./SingleDiscipline";
import Dota2 from '../../Assets/img-for-disciplines/barathrum.png'
import CSGO from '../../Assets/img-for-disciplines/csgo.png'
import Valorant from '../../Assets/img-for-disciplines/valorant.png'
import FIFA from '../../Assets/img-for-disciplines/fifa.png'

const Disciplines = () => {

    return (
        <section className={styles.disciplines}>
            <SingleDiscipline DisciplineName={'Dota 2'} img={Dota2}/>
            <SingleDiscipline DisciplineName={'CS:GO'} img={CSGO}/>
            <SingleDiscipline DisciplineName={'VALORANT'} img={Valorant}/>
            <SingleDiscipline DisciplineName={'FIFA 22'} img={FIFA}/>
        </section>
    );
};

export default Disciplines;
