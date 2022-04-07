import React from 'react';
import styles from './Contacts.module.scss'

// Photo imports
import Zaf from '../../Assets/Photoes/Boss.jpg'
import Ya from '../../Assets/Photoes/Я.jpg'
import Padalko from '../../Assets/Photoes/Падалко.jpg'
import Valera from '../../Assets/Photoes/Валера.jpg'


import {Link} from "react-router-dom";
import ContactCard from "../../Components/ContactCard";
import ButtonModal from "../../UI/ButtonModal";

const Contacts = () => {

    const Contacts = [
        {photo: Zaf, name: 'Сафаров Зафар', position: 'Организатор', number: '8914563912', telegram: '#', vkontakte:'#'},
        {photo: Ya, name: 'Сывороткин Александр', position: 'Администратор dota и fifa дисциплины', number: '8914563912', telegram: '#', vkontakte:'#'},
        {photo: Valera, name: 'Валерий Ситкин', position: 'Администратор cs-go дисциплины', number: '8914563912', telegram: '#', vkontakte:'#'},
        {photo: Padalko, name: 'Падалко Александр', position: 'Администратор valorant дисциплины', number: '8914563912', telegram: '#', vkontakte:'#'},


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
