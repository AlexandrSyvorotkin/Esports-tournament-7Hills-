import React from 'react';
import styles from './DotaTournamentBracket.module.scss'
import ButtonBrackets from "../../UI/ButtonBrackets";
import ButtonModal from "../../UI/ButtonModal";
import {Link, NavLink, Route, Routes} from "react-router-dom";
import GroupStage from "../../Components/TournamentBrackets/GroupStages/GroupStage";
import PlayoffStage from "../../Components/TournamentBrackets/PlayOffs/PlayoffStage";
import QualificationStage from "../../Components/TournamentBrackets/Qualifications/QualificationStage";
import HamburgerMenu from "../../Components/Menus/HamburgerMenu/HamburgerMenu";
import Menu from "../../Components/Menus/SideMenu/Menu";
import juggernaut from '../../Assets/bracketsBackgrounds/jugBackground.jpg'

import {dotaGroups} from "../../data-base/date-for-brackets/dota/groups";
import {dotaQualification} from "../../data-base/date-for-brackets/dota/qualification";
import {dotaPlayoffs} from "../../data-base/date-for-brackets/dota/playoff";
import {fifaPCGruops} from "../../data-base/date-for-brackets/fifa/PES5/groups/groups";
import {fifaPCPlayOffs} from "../../data-base/date-for-brackets/fifa/PC/playoffs/playoffs";


const DotaTournamentBracket = () => {
    return (
        <div className={styles.dota_tournament_braket}
             style={{
                 backgroundImage: `url('${juggernaut}')`,
                 backgroundSize: 'cover'
             }}>
            <div className={styles.dota_tournament_braket_header}>
                {/*<Link to='qualification-stage'><ButtonBrackets>Квалификации</ButtonBrackets></Link>*/}
                {/*<Link to='group-stage'><ButtonBrackets>Групповая стадия</ButtonBrackets></Link>*/}
                {/*<Link to='playoffs-stage'><ButtonBrackets>Плей-офф</ButtonBrackets></Link>*/}
                <NavLink to='fifapc'>Сетка PC</NavLink>
                <NavLink to='fifaps4'>Сетка PS4</NavLink>
                <NavLink to='fifaps5'>Сетка PS5</NavLink>
            </div>

            <Routes>

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
