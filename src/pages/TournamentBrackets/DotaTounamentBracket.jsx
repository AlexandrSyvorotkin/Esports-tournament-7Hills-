import React from 'react';
import styles from './DotaTournamentBracket.module.scss'
import ButtonBrackets from "../../UI/ButtonBrackets";
import ButtonModal from "../../UI/ButtonModal";
import {Link, Route, Routes} from "react-router-dom";
import QualificationStage from "../../Components/TournamentBrackets/QualificationStage";
import GroupStage from "../../Components/TournamentBrackets/GroupStage";
import PlayoffStage from "../../Components/TournamentBrackets/PlayoffStage";

const DotaTounamentBracket = () => {
    return (
        <div className={styles.dota_tournament_braket}>
            <div className={styles.dota_tournament_braket_header}>
                <ButtonBrackets>Квалификации</ButtonBrackets>
                <ButtonBrackets>Групповая стадия</ButtonBrackets>
                <ButtonBrackets>Плей-офф</ButtonBrackets>
            </div>
            {/*<Routes>*/}
            {/*    <Route path='tournament-brackets/dota-tournament-bracket/qualification-stage' element={<QualificationStage/>}/>*/}
            {/*    <Route path='tournament-brackets/dota-tournament-bracket/group-stage' element={<GroupStage/>}/>*/}
            {/*    <Route path='tournament-brackets/dota-tournament-bracket/playoffs-stage' element={<PlayoffStage/>}/>*/}
            {/*</Routes>*/}
            <GroupStage/>
            <div className={styles.dota_tournament_braket_footer}>
                <Link to='/'><ButtonModal>Назад</ButtonModal></Link>
            </div>
        </div>
    );
};

export default DotaTounamentBracket;
