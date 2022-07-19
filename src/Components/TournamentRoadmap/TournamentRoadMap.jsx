import React from 'react';
import {Link} from "react-router-dom";
import styles from './TournamentRoadMap.module.scss'
import mainPosition from '../../positions/положение.pdf'
import ButtonSecondary from "../../UI/ButtonSecondary";
import TournamentStage from "../TournamentStage/TournamentStage";

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
                <TournamentStage stage='Квалификации' StageDates={dates.qualification} modalText={modalText.qualificationInfo} arrow/>
                <TournamentStage stage='Группы' StageDates={dates.groupStage} modalText={modalText.groupStageInfo} arrow/>
                <TournamentStage stage='Плей-офф' StageDates={dates.playoffs} modalText={modalText.playoffsInfo} arrow/>
                <TournamentStage stage='Финал' StageDates={dates.final} modalText={modalText.finalInfo}/>
            </div>
            <div className={styles.buttons_sections}>
                <Link to='/'><ButtonSecondary>Назад</ButtonSecondary></Link>
                <a href={positionPath} download={positionDoc}><ButtonSecondary>Регламент</ButtonSecondary></a>
                <a href={mainPosition} download={'положение.pdf'}><ButtonSecondary>Положение</ButtonSecondary></a>
                <Link to={registrationPath}><ButtonSecondary>Регистрация</ButtonSecondary></Link>
            </div>


        </div>
    );
};

export default TournamentRoadMap;
