import React from 'react';
import styles from './FifaRegulation.module.scss'
import Common from "../RegulationsParagraphs/Common/Common";
import RegulationHeader from "../RegulationsParagraphs/RegulationHeader/RegulationHeader";
import Timming from "../RegulationsParagraphs/Timming/Timming";
import GameTimmings from "../RegulationsParagraphs/GameTimmings/GameTimmings";
import GameRecording from "../RegulationsParagraphs/GameRecording/GameRecording";
import PauseAndTechnicalIssues from "../RegulationsParagraphs/PauseAndTechnicalIssues/PauseAndTechnicalIssues";
import DisciplinaryActions from "../RegulationsParagraphs/DisciplinaryActions/DisciplinaryActions";
import SpecialConditions from "../RegulationsParagraphs/SpecialConditions/SpecialConditions";

const FifaRegulation = () => {
    return (
        <div className={styles.regulation}>
            <RegulationHeader discipline='FIFA22' number='4'/>
            <Common
                platform='игровая консоль Sony PlayStation 4,
                    Sony PlayStation 5 (Любая комплектация) или ПК.'
                game='FIFA22'
                format='индивидуальное соревнование киберфутболистов в формате
                «один на один».'
                members='игроки'
                lotDate='30 апреля'
                qualificationDate='2 мая'
                groupsDate='3-6 мая'
                playoffsDate='7-9 мая'
                finalDate='29 мая'
                fifa
            />
            <div className={styles.rules}>
                <span>2. Правила игр и настройки.</span>
                <ul>
                    <li>2.1 Версия игры: лицензионная версия «FIFA 22», последний официальный патч. Платформа PS/PC.
                        <ul>
                            <li>Длительность тайма: 6 минут</li>
                            <li>Уровень сложности: легендарный;</li>
                            <li> Скорость игры: нормальная;</li>
                            <li>Игра рукой: выключено;</li>
                            <li>Максимально количество замен в матче: 3;</li>
                            <li>Погода: ясная;</li>
                            <li>Интерфейс: имя игрока и индикатор;</li>
                            <li>Индикатор игрока: имя игрока;</li>
                            <li>Отображение времени и счета: вкл.;</li>
                            <li>Мини-карта: 2D;</li>
                            <li>Прокрутка составов: выкл;</li>
                            <li>Громкость комментаторов: 0;</li>
                            <li>Своя тактика: разрешено;</li>
                            <li>Защита: только тактическая;</li>
                            <li>Камера: ТВ-Трансляция (высота: 20; масштаб: 0)</li>
                            <li>Камера вратаря: Профи</li>
                            <li>Задачи игрокам: можно менять;</li>
                            <li>Судья: рандом;</li>
                            <li>Тип игры: Товарищеский матч;</li>
                            <li>Тип составов: Онлайн;</li>
                            <li>Защита: тактическая;</li>
                            <li>Свои схемы: разрешены;</li>
                            <li>Свои тактики: разрешены;</li>
                            <li>Скорость игры: нормальная;</li>
                            <li>Офсайды: включены;</li>
                            <li>Можно выбирать клубные и национальные команды;</li>
                        </ul>
                    </li>
                    <li>2.2. Участникам турнира необходимо Интернет-соединение:
                        <ul>
                            <li>Необходим тип NAT: Тип 2 или 1</li>
                            <li>Требуется использовать LAN подключение консоли к интернету.</li>
                            <li>Скорость загрузки в сеть и из сети: строго более 5 мбит/с.
                            </li>
                        </ul>
                    </li>
                    <li>2.3 Игроки, вышедшие в плей-офф турнира должны быть технически готовы вести
                        трансляцию своих игр на Twitch.tv или YouTube (необходимо для организации
                        трансляции матчей).</li>
                </ul>
            </div>
            <Timming time='5'/>
            <GameTimmings/>
            <GameRecording/>
            <PauseAndTechnicalIssues pauseTime='30' pauseCount='4'/>
            <div className={styles.forbidden}>
                <span>7. Запрещено</span>
                <ul>
                    <li>7.1 Любые действия, противоречащие данным Правилам.</li>
                    <li>7.2 Оскорбления в адрес противника, оргиназаторов, судей и других участников
                        соревнований.
                    </li>
                    <li>7.3 Неспортивное поведение, которое определяется судьями турнира.</li>
                    <li>7.4 Намеренно прерывать матч.</li>
                    <li>7.5 Остановка игры для замены игрока, корректировки расстановки, изменения
                        тактики своей команды и других действий, связанные и не связанные с игровым
                        процессом, если мяч в игре и находится у соперника (равно – нет контроля мяча)
                        и/или мяч находится на половине поля соперника.</li>
                    <li>7.6 Остановка игры с помощью кнопки «PS» на геймпаде или любых других
                        способов остановки игры, которые могли повлиять на ход матча.
                    </li>
                    <li>7.7 Затягивание времени, т.е. нахождение на своей половине поля с мячом, без
                        прессинга со стороны соперника, без попыток идти в атаку и переходов на
                        половину поля соперника в течение 5 игровых минут.</li>
                    <li>7.8 Переключение на вратаря в опасной ситуации нажатием кнопки "Сенсорная
                        панель".
                    </li>
                    <li>7.9 Нахождения в игре посторонних лиц.</li>
                    <li>7.10 Неспортивное поведение. Неспортивное поведение определяется судьей
                        матча или главным судьей. Включает в себя просмотр трансляции матча, принятие
                        подсказок со стороны и т.д.
                    </li>
                    <li>7.11 Намеренный разрыв соединения с сервером. Намеренным разрывом
                        соединения считается таковой без основательных и указанных причин.</li>
                    <li>7.12 Использование программ, влияющих на игровой процесс (например,
                        wallhack).</li>
                    <li>7.13 Использование игровых никнеймов, прямо или косвенно содержащих
                        нецензурную лексику.</li>
                </ul>
            </div>
            <DisciplinaryActions/>
            <SpecialConditions/>
        </div>
    );
};

export default FifaRegulation;