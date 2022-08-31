import React from 'react';
import styles from './Paragraph.module.scss'

const AppealOrder = ({number}) => {
    return (
        <div className={styles.paragraph}>
            <span>{number} Порядок рассмотрения аппеляции.</span>
            <ul>
                <li>10.1 Все претензии по нарушению правил игры предъявляются в течение 20 минут
                    после окончания матча. Претензию имеет право предъявить только капитан
                    команды. Претензия направляется судьям главному судье в электронном виде на
                    discord-сервере. </li>
            </ul>

        </div>
    );
};

export default AppealOrder;