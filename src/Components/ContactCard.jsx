import React from "react";
import styles from './ContactCard.module.scss'
import vk from '../Assets/contactIcons/vk.png'
import telegram from '../Assets/contactIcons/telegram.png'

const ContactCard = ({photo, position, number}) => {
        return (
                <div className={styles.card}>
                        <div className={styles.avatar}>
                            <img
                                src={photo}
                                className="card-img-top"
                                alt=""
                            />
                        </div>
                        <h5 className={styles.card_title}>
                            {position}
                        </h5>
                        <p className={styles.card_text}>
                            <span className={styles.phone}>{number}</span>
                            <div className={styles.contact_icons}>
                                <img src={vk} alt=""/>
                                <img src={telegram} alt=""/>
                            </div>
                        </p>
                </div>
        );
}

export default ContactCard;
