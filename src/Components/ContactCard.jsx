import React from "react";
import styles from './ContactCard.module.scss'
import zaf from '../Assets/Photoes/Boss.jpg'

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
                            Имена
                            <span className={styles.phone}>{number}</span>
                        </p>
                </div>
        );
}

export default ContactCard;
