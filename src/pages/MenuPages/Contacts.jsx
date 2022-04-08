import React from 'react';
import styles from './Contacts.module.scss'

// Photo imports
import Zaf from '../../Assets/Photoes/Boss.jpg'
import Ya from '../../Assets/Photoes/me.jpg'
import Padalko from '../../Assets/Photoes/Падалко.jpg'
import Valera from '../../Assets/Photoes/Валера.jpg'


import {Link} from "react-router-dom";
import ContactCard from "../../Components/ContactCard";
import ButtonModal from "../../UI/ButtonModal";

const Contacts = () => {

    const Contacts = [
        {photo: Zaf, name: 'Сафаров Зафар', position: 'Организатор', telegram: '#', vkontakte:'https://vk.com/safarovzafar'},
        {photo: Ya, name: 'Сывороткин Александр', position: 'Администратор dota и fifa дисциплины', number: '+79164419605', telegram: 'https://t.me/AlexSyvorotkin', vkontakte:'https://vk.com/suvorotkinalex'},
        {photo: Valera, name: 'Ситкин Валерий ', position: 'Администратор cs-go дисциплины', number: '+79309469544', telegram: 'https://t.me/encose', vkontakte:'https://vk.com/grimmjowq'},
        {photo: Padalko, name: 'Падалко Александр', position: 'Администратор valorant дисциплины', number: '+7914563912', telegram: 'https://t.me/DarcDent', vkontakte:'https://vk.com/darcdent'},


    ]

    return (
        <div className={styles.contacts}>
            <h2 className={styles.contacts_header}>Наша команда</h2>
            <div className={styles.contacts_information}>
                {Contacts.map((contact, i) => {
                    return (
                        <ContactCard
                            key={i}
                            name={contact.name}
                            number={contact.number}
                            position={contact.position}
                            photo={contact.photo}
                            vkLink={contact.vkontakte}
                            telegramLink={contact.telegram}
                        />
                    )
                })}
            </div>
            <div className={styles.concats_footer}>
                <Link to='/' className={styles.a}><ButtonModal>Назад</ButtonModal></Link>
            </div>
        </div>
    );
};

export default Contacts;
