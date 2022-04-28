import React from 'react';
import styles from './TurnamentBracketCard.module.scss'
import ButtonModal from "../UI/ButtonModal";

const TournamentBracketCard = ({name, img}) => {
    return (
        <div className={styles.tournament_bracket_card}>
            <div className={styles.tournament_bracket_card_img}>
                <img src={img} alt=""/>
            </div>
            <div className={styles.tournament_bracket_card_content}>
                <h3>{name}</h3>
                <a className={styles.tournament_bracket_card_route}>Перейти</a>
            </div>
        </div>
    );
};

export default TournamentBracketCard;
