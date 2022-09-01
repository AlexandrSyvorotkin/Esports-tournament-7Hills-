import React from 'react';
import styles from './Paragraph.module.scss'

const AppealOrder = ({number}) => {
    return (
        <div className={styles.paragraph}>
            <ul>
                <li className={styles.point}>{number} Порядок рассмотрения аппеляции.</li>
                <ul className={styles.list_points}>
                    <li>10.1 <span>Все претензии по нарушению правил игры предъявляются в течение 20 минут
                        после окончания матча. Претензию имеет право предъявить только капитан
                        команды. Претензия направляется судьям главному судье в электронном виде на
                        discord-сервере.</span> </li>
                </ul>
            </ul>
        </div>
    );
};

export default AppealOrder;