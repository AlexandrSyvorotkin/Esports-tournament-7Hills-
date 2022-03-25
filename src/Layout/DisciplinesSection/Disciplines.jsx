import React from 'react';
import styles from './Disciplines.module.css'
import SingleDiscipline from "./SingleDiscipline";

const Disciplines = () => {

    return (
        <section className={styles.disciplines}>
            <SingleDiscipline DisciplineName={'Dota 2'}/>
            <SingleDiscipline DisciplineName={'CS:GO'}/>
            <SingleDiscipline DisciplineName={'VALORANT'}/>
            <SingleDiscipline DisciplineName={'FIFA 22'}/>
        </section>
    );
};

export default Disciplines;
