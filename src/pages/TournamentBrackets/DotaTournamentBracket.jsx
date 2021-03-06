import React from 'react';
import styles from './DotaTournamentBracket.module.scss'
import ButtonBrackets from "../../UI/ButtonBrackets";
import ButtonModal from "../../UI/ButtonModal";
import {Link, Route, Routes} from "react-router-dom";
import GroupStage from "../../Components/TournamentBrackets/GroupStages/GroupStage";
import PlayoffStage from "../../Components/TournamentBrackets/PlayOffs/PlayoffStage";
import QualificationStage from "../../Components/TournamentBrackets/Qualifications/QualificationStage";
import HamburgerMenu from "../../Components/Menus/HamburgerMenu/HamburgerMenu";
import Menu from "../../Components/Menus/SideMenu/Menu";
import juggernaut from '../../Assets/bracketsBackgrounds/jugBackground.jpg'


const DotaTournamentBracket = () => {
    return (
        <div className={styles.dota_tournament_braket}
            style={{
            backgroundImage: `url('../../Assets/bracketsBackgrounds/jugBackground.jpg')`,
            backgroundSize: 'cover'
        }}>
            <div className={styles.dota_tournament_braket_header}>
                <Link to='qualification-stage'><ButtonBrackets>Квалификации</ButtonBrackets></Link>
                <Link to='group-stage'><ButtonBrackets>Групповая стадия</ButtonBrackets></Link>
                <Link to='playoffs-stage'><ButtonBrackets>Плей-офф</ButtonBrackets></Link>
            </div>
            <Routes>
                <Route path='qualification-stage' element={<QualificationStage/>}/>
                <Route path='group-stage' element={<GroupStage/>}/>
                <Route path='playoffs-stage' element={<PlayoffStage/>}/>
            </Routes>
            <div className={styles.dota_tournament_braket_footer}>
                <Link to='/'><ButtonModal>Назад</ButtonModal></Link>
            </div>
            <HamburgerMenu/>
            <Menu/>
        </div>
    );
};

export default DotaTournamentBracket;
