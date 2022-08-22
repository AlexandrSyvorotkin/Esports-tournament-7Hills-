import React from 'react';
import styles from './PauseAndTechnicalIssues.module.scss'

// TODO: Доделать из 9 пунка регламента доты

const PauseAndTechnicalIssues = ({pauseCount, pauseTime}) => {
    return (
        <div className={styles.game}>
            <span>6. Паузы и технические пробелмы.</span>
            <ul>
                <li>6.1 Каждая команда имеет право использовать максимум по {pauseCount} тактические паузы
                    за карту длительностью по {pauseTime} секунд.</li>
                <li>6.2 Каждая команда имеет право на использование 1-ой технической паузы
                    длительностью не более пяти минут.
                </li>
                <li>6.3 В случае возникновения технических неполадок у игроков, команда может
                    использовать для их решения техническую паузу. Если проблема со стороны
                    игрока так и не будет решена, то по завершении паузы матч продолжается.</li>
                <li>6.4 В случае возникновения технических неполадок у игроков, они обязаны
                    сообщить об этой проблеме судье. Сообщения о технической проблеме после
                    завершения матча не рассматриваются.
                </li>
                <li>6.5 Организатор турнира не несет ответственность за техническое состояние
                    принадлежащих участнику устройств/компьютера/ноутбука.</li>
                <li>6.6 При грубом нарушении игры судья может аннулировать счет игры. По
                    решению судьи может быть назначена переигровка карты/матча или техническое
                    поражение в карте/матче.</li>
            </ul>
        </div>
    );
};

export default PauseAndTechnicalIssues;