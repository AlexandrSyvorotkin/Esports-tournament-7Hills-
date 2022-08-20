import React from 'react';
import RegulationHeader from "../RegulationsParagraphs/RegulationHeader/RegulationHeader";
import Common from "../RegulationsParagraphs/Common/Common";
import GameRulesAndSettings from "../RegulationsParagraphs/GameRulesAndSettings";
import Timming from "../RegulationsParagraphs/Timming/Timming";
import GameTimmings from "../RegulationsParagraphs/GameTimmings/GameTimmings";
import GameRecording from "../RegulationsParagraphs/GameRecording/GameRecording";
import PauseAndTechnicalIssues from "../RegulationsParagraphs/PauseAndTechnicalIssues/PauseAndTechnicalIssues";
import styles from './DotaRegulation.module.scss'

const DotaRegulation = () => {
    return (
        <div className={styles.regulation}>
            <RegulationHeader discipline='dota 2' number='2'/>
            <Common
                platform='ПК'
                game='Dota 2'
                format='Командные соревнования, пять на пять. Каждая команда имеет право иметь одного запасного игрока'
                members='команды'
                lotDate='30 апреля'
                qualificationDate='11 мая'
                groupsDate='12-15 мая'
                playoffsDate='16-18 мая'
                finalDate='28 мая'
            />
            <GameRulesAndSettings/>
            <Timming time='10 минут'/>
            <GameTimmings/>
            <GameRecording/>
            <PauseAndTechnicalIssues pauseCount='2' pauseTime='1'/>
        </div>
    );
};

export default DotaRegulation;