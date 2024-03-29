import React from 'react';
import styles from "./Paragraph.module.scss";

//TODO: Доделать под фифу

const DisciplinaryActions = ({discipline, dota}) => {
    return (
        <div className={styles.paragraph}>
            <ul>
                <li className={styles.point}>8. Дисциплинарные взыскания</li>
                <ul className={styles.list_points}>
                    <li>8.1 <span>Виды санкций:</span>
                        <ul className={styles.subpoints}>
                            <li>- устное предупреждение (2 за матч одной команде, следующее устное
                                предупреждение является техническим поражением);
                            </li>
                            <li>- техническое поражение в матче;</li>
                            <li>- дисквалификация с Турнира.</li>
                        </ul>
                    </li>
                    <li>8.2 <span>Только Организатор и Главный судья может дисквалифицировать команду с
                        Турнира.</span>
                    </li>
                    <li>8.3 <span>Нарушения, за которые выносится устное предупреждение:</span>
                        <ul className={styles.subpoints}>
                            <li>- Остановка игры без объяснения причины или любых других способов остановки
                                игры, которые могли повлиять на ход матча;
                            </li>
                            <li>- Использование никнейма содержащие ненормативную лексику, пропаганду
                                расизма или другие формы ненависти к представителям тех или иных
                                национальностей, меньшинств.
                            </li>
                            <li>- Использование изображения насилия, порнографические материалы, пропаганду
                                расизма или другие формы ненависти к представителям тех или иных
                                национальностей, меньшинств на аватарах игроков.
                            </li>
                            <li>- Использование ника не указанного в регистрации.
                            </li>
                        </ul>
                    </li>
                    <li>8.4 <span>Нарушения, за которые присуждается техническое поражение в матче:</span>
                        <ul className={styles.subpoints}>
                            <li>- Явка на матч позднее, чем в назначенное время до установленного времени.</li>
                            <li>- Умышленное использования багов игры (баг – ошибка в коде игры, которая
                                влияет на ход матча).
                            </li>
                            <li>- Несогласованные замены игроков.</li>
                            <li>- Начало игры неполными составами.</li>
                            <li>- Нахождение в игре посторонних лиц.</li>
                            <li>- Неспортивное поведение: саботирование матчей, манипулирование правилами,
                                моральное давление на соперника, флуд в чат.
                            </li>
                            <li>- Любые действия, противоречащие Регламенту и правилам {discipline}.</li>
                            {dota && <li>- Использованная и не отмененная фраза “gg” в чате.</li>}
                        </ul>
                    </li>
                    <li>8.5 <span>Нарушения, за которые команда получает дисквалификацию с турнира:</span>
                        <ul className={styles.subpoints}>
                            <li>- Ввод в заблуждение Организатора или членов оргкомитета.
                            </li>
                            <li>- Использование сторонних программ, влияющих на ход игры.</li>
                            <li>- Участие в турнире с не указанного в заявке аккаунта Steam.</li>
                            <li>- Vac бан на аккаунте в любых играх за последний год</li>
                            <li>- Оскорбление соперника, использование нецензурной лексики, а также негативные
                                и отрицательные комментарии в адрес судьи или Организатора;
                            </li>
                        </ul>
                    </li>
                </ul>
            </ul>
        </div>
    );
};

export default DisciplinaryActions;