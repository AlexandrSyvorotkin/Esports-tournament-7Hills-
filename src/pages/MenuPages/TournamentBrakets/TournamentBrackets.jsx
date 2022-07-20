import React from 'react';
import styles from './TournamentBrackets.module.scss'
import {Link} from "react-router-dom";

//import components
import TournamentBracketCard from "../../../Components/TournamentBracketCard/TournamentBracketCard";
//import ui
import ButtonModal from "../../../UI/ButtonModal";
//import images
import dota from '../../../Assets/BracketsImages/dotabrackets.png'
import valorant from '../../../Assets/BracketsImages/valorantlogobrackets.png'
import csgo from '../../../Assets/BracketsImages/csgo.png'
import fifa from '../../../Assets/BracketsImages/fifaforbrackets.png'
import HamburgerMenu from "../../../Components/Menus/HamburgerMenu/HamburgerMenu";
import Menu from "../../../Components/Menus/SideMenu/Menu";

const TournamentBracketsCards = {
    dota: {img: dota, name: 'dota'},
    valorant: {img: valorant, name: 'valorant'},
    fifa: {img: fifa, name: 'fifa'},
    csgo: {img: csgo, name: 'cs:go'}
}


const TournamentBrackets = () => {
    return (
        <div className={styles.tournament_brackets}>
            <h2>Турнирные сетки</h2>
            <div className={styles.tournament_brackets_content}>
                <TournamentBracketCard name={TournamentBracketsCards.dota.name}
                                       img={TournamentBracketsCards.dota.img}
                                       routingPath={'dota-tournament-bracket'}/>
                {/*<TournamentBracketCard name={TournamentBracketsCards.valorant.name} img={TournamentBracketsCards.valorant.img}/>*/}
            </div>
            {/*<div className={styles.tournament_brackets_content}>*/}
            {/*    <TournamentBracketCard name={TournamentBracketsCards.fifa.name} img={TournamentBracketsCards.fifa.img}/>*/}
            {/*    <TournamentBracketCard name={TournamentBracketsCards.csgo.name} img={TournamentBracketsCards.csgo.img}/>*/}
            {/*</div>*/}
            <div className={styles.tournament_brackets_footer}>
                <Link to='/'><ButtonModal>Назад</ButtonModal></Link>
            </div>
            <HamburgerMenu/>
            <Menu/>
        </div>
    );
};

export default TournamentBrackets;
