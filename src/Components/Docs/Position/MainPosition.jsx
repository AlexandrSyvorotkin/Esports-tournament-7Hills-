import React from 'react';
import styles from './MainPosition.module.scss'

const MainPosition = () => {
    return (
        <div className={styles.positions}>
            <span className={styles.positions_header}>Положение о проведении киберспортивного турнира "Семь Холмов".</span>
            <ul>
                <li className={styles.numbers}>1. Цели и задачи</li>
                <p>Киберспортивный турнир "Семь холмов" проводится среди трудовых и студенческих коллективов членских организаций МФП(далее - онлай турнир)
                в рамках популяризации киберспорта.</p>
                <li className={styles.numbers}>2. Руководство по проведению онлай турнира</li>
                <p>Общее руководство по организации и проведению турнира осуществляет Московская Федерация профсоюзов.
                    Непосредственное проведение турнира осуществляет Частное учереждение "Центр физкультуры и спорта МФП".
                    Судейство осуществляется главной судейской коллегией, утвержденная ЦФС МФП. Главная судейская коллегия включает в себя главного судью,
                    4-х судей и 4-х администраторов (техническое сопровождение и обеспечение турнира).
                    Турнир проводится в соотвествии с "Регламентом"(Приложения №1,№2,№3,№4).</p>
                <li className={styles.numbers}>3. Участники онлайн турнира</li>
                <ul className={styles.list_points}>
                    <li>3.1 <span>В онлайн турнире могут принимать участие работники предприятий и организаций
                        города Москвы, а так же студенческая молодежь в возрасте от 18 до 35 лет включительно.</span>
                    </li>
                    <li>3.2 <span>Участники онлайн-турнира обязаны соблюдать требования согласно "Регламенту".</span></li>
                    <li>3.3 <span>Игровые дисциплины онлайн-турнира: Dota 2, Counter-Strike: Global-Offensive, Valorant, FIFA 22.</span>
                    </li>
                    <li>3.4 <span>Связь организаторов с участниками происходит через специально созданный чат (ссылка на чат
                        отправляется по электронной почте после
                        процедуры регистрации). Чат создается администратором дисциплинны.</span>
                    </li>
                    <li>3.5 <span>Участник обязан использовать один и тот же игровой аккаунт, один и тот же игровой никнейм,
                        указанный при регистрации.
                        Запрещенны любые действия направленные на передачу игрового аккаунта какому либо третьему лицу.
                        О всех изменениях участник обязан сразу же проинформировать главного судью.</span>
                    </li>
                </ul>
                <li className={styles.numbers}>4. Сроки и условия проведения киберспортивного турнира</li>
                <ul className={styles.list_points}>
                    <li>4.1 <span>Сроки проведения дисциплины указаны в соответствующем
                        «Регламенте».</span>
                    </li>
                </ul>
                <li className={styles.numbers}>5. Заявка</li>
                <p>Для участия игрокам необходимо пройти регистрацию на турнир.
                        Регистрация осуществляется на сайте <a href="">Семьхолмов.рф</a> до 18:00 30 апреля 2022 года.
                        Участник/команда, не успевшие подать заявку до указанной даты, к участию
                        в турнире не допускаются.
                        К участию допускается не более 64 команд в каждой командной дисциплине.
                        Количество участников дисциплины FIFA 22 не ограничивается.</p>
                <li className={styles.numbers}>6. Заявка</li>
                <p>Победители и призеры турнира, занявшие 1, 2, 3 места награждаются
                кубками, медалями и призами от партнеров.
                Подведение итогов будет опубликовано в течение пяти дней после окончания
                турнира на сайте турнира и в социальных сетях МФП, а также на сайте турнира.
                </p>
                <li className={styles.numbers}>7. Заключительные положения</li>
                <ul className={styles.list_points}>
                    <li>7.1 <span>Данное Положение является официальным вызовом на онлайн-турнир.</span></li>
                    <li>7.2. <span>Организаторы имеют право вносить дополнения и изменения в
                        настоящее положение в любой момент турнира.</span>
                    </li>
                    <li>7.3. <span>Справочная информация предоставляется по телефону: 8 (499) 390 -33-07.
                        Контактное лицо - Генеральный директор ЦФС Кукин А.В.</span>
                    </li>
                </ul>
            </ul>
        </div>
    );
};

export default MainPosition;