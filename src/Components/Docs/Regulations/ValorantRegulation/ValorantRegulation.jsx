import React from 'react';
import styles from './ValorantRegulation.module.scss'

// Импорт компонентов
import RegulationHeader from "../RegulationsParagraphs/RegulationHeader/RegulationHeader";
import Common from "../RegulationsParagraphs/Common/Common";
import Timming from "../RegulationsParagraphs/Timming/Timming";
import GameTimmings from "../RegulationsParagraphs/GameTimmings/GameTimmings";
import GameRecording from "../RegulationsParagraphs/GameRecording/GameRecording";
import PauseAndTechnicalIssues from "../RegulationsParagraphs/PauseAndTechnicalIssues/PauseAndTechnicalIssues";
import DisciplinaryActions from "../RegulationsParagraphs/DisciplinaryActions/DisciplinaryActions";
import SpecialConditions from "../RegulationsParagraphs/SpecialConditions/SpecialConditions";
//

const ValorantRegulation = () => {
    return (
        <div className={styles.regulation}>
            <RegulationHeader discipline='Valorant' number='1'/>
            <Common
                platform='ПК'
                game='Valorant'
                format='командные соревнования, пять на пять. Каждая команда
                имеет право иметь одного запасного игрока.'
                members='команды'
                lotDate='30 апреля'
                qualificationDate='11 мая'
                groupsDate='12-15 мая'
                playoffsDate='16-18 мая'
                finalDate='28 мая'
            />
            <div className={styles.rules}>
                <ul>
                    <li>2.1 Все матчи проводятся на серверах Стокгольм 1 или Франкфурт 1 (по взаимной
                        договоренности капитанов) в режиме «Своя игра».
                    </li>
                    <li>2.2 Настройки игры:
                        <ul>
                            <li>- Включить читы – ВЫКЛ</li>
                            <li>- Режим турнира – ВКЛ</li>
                            <li>- Овертайм 2 раунда – ВКЛ</li>
                            <li>- Сыграть все раунды - ВЫКЛ</li>
                            <li>- Скрыть историю матчей - ВЫКЛ</li>
                        </ul>
                    </li>
                    <li>2.3 Карты матча:
                        <ul>
                            <li>- Haven</li>
                            <li>- Bind</li>
                            <li>- Split</li>
                            <li>- Ascent</li>
                            <li>- Icebox</li>
                            <li>- Breeze</li>
                            <li>- Fracture</li>
                        </ul>
                    </li>
                    <li>2.4 Порядок пика бана:
                        <ul>
                            <li>BO1 Map-Veto: B1B2B1B2B1B2D</li>
                            <li>BO3 Map-Veto: B1B2P1P2B1B2D</li>
                            <li>BO5 Map-Veto: P1P2P1P2B1B2D</li>
                        </ul>
                    </li>
                    <li>2. Порядок выбора сторон.<br/>
                        Команда А выбирает карту, команда Б выбирает стороны.<br/>
                        В случае пика карты по остатку, стороны выбираются рандомным образом.<br/>
                    </li>
                    <li>2.6 Тренер имеет право присутствовать в лобби игры в слоте для тренера.<br/>
                        Любые лица, не являющиеся комментаторами/режиссерами, судьями не могут
                        присутствовать в лобби игры.

                    </li>
                    <li>2.7 Участники обязаны дождаться официальных комментаторов, если те
                        уведомили их о желании присутствовать на матче.
                    </li>
                    <li>2.8 Замены разрешены только между играми. Замены по ходу матча запрещены.
                    </li>
                </ul>
            </div>
            <Timming time='10 минут'/>
            <GameTimmings/>
            <GameRecording/>
            <PauseAndTechnicalIssues pauseCount='2' pauseTime='60 секунд'/>
            <div className={styles.forbidden}>
                <span>7. Запрещено</span>
                <ul>
                    <li>7.1 Любые действия, противоречащие данным Правилам, а также Правилам игры
                        VALORANT.</li>
                    <li>7.2 Использование «багов» карты, а также «багов» скиллов персонажей.</li>
                    <li>7.3 Нахождения в игре посторонних лиц.
                    </li>
                    <li>7.4 Оскорбления в адрес противников, администрации и других участников
                        соревнований.</li>
                    <li>7.5 Неспортивное поведение. Неспортивное поведение определяется судьей матча
                        или главным судьей. Включает в себя просмотр трансляции матча, принятие
                        подсказок со стороны и т.п.</li>
                    <li>7.6. Намеренный разрыв соединения с сервером. Намеренным разрывом
                        соединения считается таковой без основательных и указанных причин.
                        7.7 Начало игры неполными составами.</li>
                    <li>7.8 Использование стороннего ПО для получения преимущества в игре.</li>
                    <li>7.9 Начало игры, если соперник не готов и сообщил о неготовности.</li>
                    <li>7.10 Ввод в заблуждение судейской коллегии путем обмана и различных
                        махинаций.</li>
                    <li>7.11 Использование игровых никнеймов, прямо или косвенно содержащих
                        нецензурную лексику.
                    </li>
                    <li>7.12 Отправка необоснованно большого количества сообщений в чат, в каналах
                        Discord'а и игры.</li>
                    <li>7.13 Если игрок нашел любой новый нечестный способ повлиять на ход игры или
                        получить игровое преимущество, и данный момент не регламентирован, и
                        произошел впервые, это дает право организатору турнира дисквалифицировать
                        игрока/команду без предупреждения.
                    </li>
                </ul>
            </div>
            <DisciplinaryActions discipline='Valorant'/>
            <SpecialConditions number_li='9.1' number='9.'/>
        </div>
    );
};

export default ValorantRegulation;