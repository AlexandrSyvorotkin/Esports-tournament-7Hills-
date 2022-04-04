import React from 'react';
import styles from './AboutUsCard.module.scss'

const AboutUsCard = ({photo, name, position, number, telegram, vkontakte}) => {
    return (
        <div className={styles.about_us_card}>
            <p>{position}</p>
            <p className={styles.name}>{name}</p>
            <div className={styles.photo}>
                <img src={photo} alt=""/>
            </div>
            <p>{number}</p>
            <div>
                <ul>
                    <li>Telegram</li>
                    <li>VK</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUsCard;
