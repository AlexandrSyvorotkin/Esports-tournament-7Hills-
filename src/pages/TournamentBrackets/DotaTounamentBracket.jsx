import React from 'react';
import styles from './DotaTournamentBracket.module.scss'
import GroupCard from "../../Components/GroupCard";
import ButtonBrackets from "../../UI/ButtonBrackets";

const DotaTounamentBracket = () => {
    return (
        <div className={styles.dota_tournament_braket}>
            <div className={styles.dota_tournament_braket_header}>
                <ButtonBrackets>Квалификации</ButtonBrackets>
                <ButtonBrackets>Групповая стадия</ButtonBrackets>
                <ButtonBrackets>Плей-офф</ButtonBrackets>
            </div>
            <div className={styles.dota_tournament_braket_groups}>
                <GroupCard/>
                <GroupCard/>
                <GroupCard/>
                <GroupCard/>
            </div>
        </div>
    );
};

export default DotaTounamentBracket;
