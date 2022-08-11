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
import valorant from '../../Assets/Backgrounds/valorant_background.png'
import {valorantGroups} from "../../data-base/date-for-brackets/valorant/groups";
import {valorantPlayoffs} from "../../data-base/date-for-brackets/valorant/playoffs";

console.log(valorantPlayoffs.quarterfinal)
console.log(valorantPlayoffs.final)
console.log(valorantPlayoffs.round_one)
console.log(valorantPlayoffs.third_place_game)


const DotaTournamentBracket = () => {
    return (
        <div className={styles.dota_tournament_braket}
             style={{
                 backgroundImage: `url('${valorant}')`,
                 backgroundSize: 'cover'
             }}>
            <div className={styles.dota_tournament_braket_header}>
                {/*<Link to='qualification-stage'><ButtonBrackets>Квалификации</ButtonBrackets></Link>*/}
                <Link to='group-stage'><ButtonBrackets>Групповая стадия</ButtonBrackets></Link>
                <Link to='playoffs-stage'><ButtonBrackets>Плей-офф</ButtonBrackets></Link>
            </div>
            <Routes>
                <Route path='group-stage' element={<GroupStage groups={valorantGroups}/>}/>
                <Route path='playoffs-stage' element={<PlayoffStage playoffs={valorantPlayoffs}/>}/>
            </Routes>
            <div className={styles.dota_tournament_braket_footer}>
                <Link to='/tournament-brackets'><ButtonModal>Назад</ButtonModal></Link>
            </div>
            <HamburgerMenu/>
            <Menu/>
        </div>
    );
};

export default DotaTournamentBracket;
