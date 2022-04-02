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
            <SingleDiscipline DisciplineName={'Dota 2'} img={Dota2} RoutingPath={'/Esports-tournament-7Hills-/dota'}/>
            <SingleDiscipline DisciplineName={'CS:GO'} img={CSGO} RoutingPath={'/Esports-tournament-7Hills-/csgo'}/>
            <SingleDiscipline DisciplineName={'VALORANT'} img={Valorant} RoutingPath={'/Esports-tournament-7Hills-/valorant'}/>
            <SingleDiscipline DisciplineName={'FIFA 22'} img={FIFA} RoutingPath={'/Esports-tournament-7Hills-/fifa'}/>
        </section>
    );
};

export default Disciplines;
