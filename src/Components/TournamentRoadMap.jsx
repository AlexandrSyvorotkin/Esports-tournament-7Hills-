import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import styles from './TournamentRoadMap.module.scss'
import ModalContext from "../context/modal-context";
import ButtonSecondary from "../UI/ButtonSecondary";
import TournamentStage from "./TournamentStage";
import mainPosition from '../positions/положение.pdf'

const TournamentRoadMap = ({dates, registrationPath, positionPath, positionDoc}) => {



    const modalText = {
        qualificationInfo: 'Все зарегистрировавшиеся команды (до 64 коллектива) сначала играют BO1 квалификации на вылет, 32 лучших проходят в групповой этап',
        groupStageInfo: 'В группе 4 коллектива, всего 8 групп. Игры в группе проходят в формате ВО1, каждая команда играет с каждой. За победу начисляется одно очко, за поражение 0. Две лучшие команды проходят в следующий этап, две вылетают. ',
        playoffsInfo: 'После игр группового этапа, лучшие 16 команд проходят в следующий этап, случайным образом формируется сетка. Игры 1\\8 проходят по системе BO1, 1\\4 и 1\\2 – BO3',
        finalInfo: 'Финал турнира проводится в компьтерном клубе по системе BO5'
    }

    return (
        <div className={styles.tournament_roadmaps}>
            <div className={styles.tournament_roadmap}>
                <TournamentStage stage={'Квалификации'} dates={dates} modalText={modalText.qualificationInfo}/>
                <TournamentStage stage={'Групповая стадия'} dates={dates} modalText={modalText.groupStageInfo}/>
                <TournamentStage stage={'Плей-офф'} dates={dates} modalText={modalText.playoffsInfo}/>
                <TournamentStage stage={'Финал'} dates={dates} modalText={modalText.finalInfo}/>
            </div>
            <div className={styles.buttons_sections}>
                <Link to='/'><ButtonSecondary>Назад</ButtonSecondary></Link>
                <a href={positionPath} download={'положение.pdf'}><ButtonSecondary>Регламент</ButtonSecondary></a>
                <a href={mainPosition} download={positionDoc}><ButtonSecondary>Положение</ButtonSecondary></a>
                <Link to={registrationPath}><ButtonSecondary>Регистрация</ButtonSecondary></Link>
            </div>


        </div>
    );
};

export default TournamentRoadMap;
