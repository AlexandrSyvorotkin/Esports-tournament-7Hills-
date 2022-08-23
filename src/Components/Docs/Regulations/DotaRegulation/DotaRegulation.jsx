import React from 'react';
import styles from './DotaRegulation.module.scss'

// Импорт компонентов
import RegulationHeader from "../RegulationsParagraphs/RegulationHeader/RegulationHeader";
import Common from "../RegulationsParagraphs/Common/Common";
import Timming from "../RegulationsParagraphs/Timming/Timming";
import GameTimmings from "../RegulationsParagraphs/GameTimmings/GameTimmings";
import GameRecording from "../RegulationsParagraphs/GameRecording/GameRecording";
import PauseAndTechnicalIssues from "../RegulationsParagraphs/PauseAndTechnicalIssues/PauseAndTechnicalIssues";
import AppealOrder from "../RegulationsParagraphs/AppealOrder/AppealOrder";
import SpecialConditions from "../RegulationsParagraphs/SpecialConditions/SpecialConditions";
import DisciplinaryActions from "../RegulationsParagraphs/DisciplinaryActions/DisciplinaryActions";
//

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
            <div className={styles.rules}>
                <span>Правила игр и настройки.</span>
                <ul>
                    <li>2.1 Версия игры: лицензионная версия Dota 2, последний официальный патч
                    </li>
                    <li>2.2 Лобби создается игроком-капитаном команды либо судьей по взаимной
                        договоренности обеих команд.
                    </li>
                    <li>2.3 Название лобби устанавливается судьей.</li>
                    <li>2.4 Игровые настройки лобби:
                        Режим игры – Capitans Mode. Местоположение сервера – Люксембург (сервер
                        можно поменять по взаимной договоренности команд, об этом необходимо
                        уведомить организаторов).<br/>
                        Наличие тренера – запретить.<br/>
                        Читы – запрещены.<br/>

                    </li>
                    <li>2.5 Выбор стороны и право пика определяются капитанами команды с помощью
                        «монетки» (команда /roll) в лобби или по взаимной договоренности обеих команд,
                        после игры команды меняются стороной.
                    </li>
                    <li>2.6 Побеждает команда, уничтожившая трон противника, или вынудившая
                        команду противника покинуть игру. Покинутой игрой считается падение трона
                        после написания «gg» в чат. Отправка сообщения “gg” в чат считается признанием
                        поражения. Если “gg” в чат было написано случайно, однократно и отменено в
                        течении 3 секунд игра продолжается.
                    </li>
                    <li>2.7 Игроки должны явится за 10 минут до начала матча и сообщить о готовсти
                        судье в discord и не позднее времени назначенного матча.
                    </li>
                    <li>2.9 Замены основных игроков могут проводиться либо во время матча между
                        картами либо между матчами и только по согласованию с судьей и только
                        игроками которые были указаны при регистрации.
                    </li>
                    <li>2.9 После окончания игры капитан команды, победившей в матче, обязан
                        отправить скриншоты с результатами на discord-сервер.
                    </li>
                    <li>2.10 Организацию и контроль за проведением турнира осуществляют организатор
                        и члены оргкомитета Турнира (судьи).
                    </li>
                </ul>
            </div>
            <Timming time='10 минут'/>
            <GameTimmings/>
            <GameRecording/>
            <PauseAndTechnicalIssues pauseCount='2' pauseTime='60'/>
            <div className={styles.forbidden}>
                <span>7. Запрещено</span>
                <ul>
                    <li>7.1 Принимать участие в турнире с неуказанного в заявке аккаунта Steam.
                    </li>
                    <li>7.2 Использовать никнеймы содержащие ненормативную лексику, пропаганду
                        расизма или другие формы ненависти к представителям тех или иных
                        национальностей, меньшинств.
                    </li>
                    <li>7.3 Использовать изображения насилия, порнографические материалы, пропаганду
                        расизма или другие формы ненависти к представителям тех или иных
                        национальностей, меньшинств на аватарах игроков.
                    </li>
                    <li>7.4 Начинать игру неполными составами.
                    </li>
                    <li>7.5 Нахождение в игре посторонних лиц.
                    </li>
                    <li>7.6 Неспортивное поведение: саботирование матчей, манипулирование правилами,
                        моральное давление на соперника, флуд в чат.
                    </li>
                    <li>7.7 Умышленное использование багов игры (баг – ошибка в коде игры, которая
                        влияет на ход матча).
                    </li>
                    <li>7.8 Проводить несогласованные замены игроков.
                    </li>
                    <li>7.9 Совершать любые действия, противоречащие Регламенту и правилам Dota 2.</li>
                    <li>7.10 Иметь vac-бан на аккаунте в любых играх за последний год.
                    </li>
                    <li>7.11 Останавливать игру без объяснения причины или любых других способов
                        остановки игры, которые могли повлиять на ход матча;
                    </li>
                    <li>7.12 Оскорблять соперника, использовать нецензурную лексику, а также
                        негативные и отрицательные комментарии в адрес судьи или Организатора;
                    </li>
                    <li>7.13 Явка на матч позднее, чем в назначенное время до установленного времени.</li>
                    <li>7.14 Использование сторонних программ, влияющих на ход игры.
                    </li>
                    <li>7.15 Ввод в заблуждение Организатора или членов оргкомитета.</li>
                    <li>7.16 Использовать никнейм неуказанный в регистрации.</li>
                    <li>7.17 Писать “gg” в чат если это не является признанием поражения.</li>
                </ul>
            </div>
            <DisciplinaryActions discipline='Dota 2' dota/>
            <AppealOrder number='10' dota/>
            <SpecialConditions number='11' number_li='11.1'/>
        </div>
    );
};

export default DotaRegulation;