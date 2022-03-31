import React from 'react';
import styles from './Disciplines.module.scss'
import SingleDiscipline from "./SingleDiscipline";
import Dota2 from '../../Assets/img-for-disciplines/barathrum.png'
import CSGO from '../../Assets/img-for-disciplines/csgo.png'
import Valorant from '../../Assets/img-for-disciplines/valorant.png'
import FIFA from '../../Assets/img-for-disciplines/fifa.png'
import Menu from "../../Components/Menu";

const Disciplines = () => {

    return (
        <section className={styles.disciplines}>
            <SingleDiscipline DisciplineName={'Dota 2'} img={Dota2} RoutingPath={'/dota'}/>
            <SingleDiscipline DisciplineName={'CS:GO'} img={CSGO} RoutingPath={'/csgo'}/>
            <SingleDiscipline DisciplineName={'VALORANT'} img={Valorant} RoutingPath={'/valorant'}/>
            <SingleDiscipline DisciplineName={'FIFA 22'} img={FIFA} RoutingPath={'/fifa'}/>
        </section>
    );
};

export default Disciplines;
