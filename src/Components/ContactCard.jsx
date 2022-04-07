import React from "react";
import styles from './ContactCard.module.scss'
import vk from '../Assets/contactIcons/vk.png'
import telegram from '../Assets/contactIcons/telegram.png'

const ContactCard = ({photo, position, number, vkLink, telegramLink, name}) => {
        return (
                <div className={styles.card}>
                        <div className={styles.avatar}>
                            <img
                                src={photo}
                                className="card-img-top"
                                alt=""
                            />
                        </div>
                        <h2 className={styles.card_name}>{name}</h2>
                        <h5 className={styles.card_title}>
                            {position}
                        </h5>
                        <p className={styles.card_text}>
                            <span className={styles.phone}>{number}</span>
                        </p>
                        <div className={styles.contact_icons}>
                            <div className={styles.contact_links}>
                                <a href={vkLink}><img src={vk} alt=""/></a>
                            </div>
                            <div className={styles.contact_links}>
                                <a href={telegramLink}><img src={telegram} alt=""/></a>
                            </div>
                        </div>
                </div>
        );
}

export default ContactCard;
