import React from 'react';
import styles from './Contacts.module.scss'
import AboutUsCard from "../../Components/AboutUsCard";

// Photo imports
import Boss from '../../Assets/Photoes/Boss.jpg'
import Masha from '../../Assets/Photoes/Маша.jpg'
import Ya from '../../Assets/Photoes/Я.jpg'
import Padalko from '../../Assets/Photoes/Падалко.jpg'
import Misha from '../../Assets/Photoes/миша.jpg'
import Button from "../../UI/Button";
import {Link} from "react-router-dom";

const Contacts = () => {

    const Contacts = [
        {photo: Boss , name: 'Сафаров Зафар', position: 'Организатор', number: '8914563912', telegram: '#', vkontakte:'#'},
        {photo: Ya, name: 'Сывороткин Александр', position: 'Администратор dota дисциплины', number: '8914563912', telegram: '#', vkontakte:'#'},
        {name: 'Валерий Ситкин', position: 'Администратор cs-go дисциплины', number: '8914563912', telegram: '#', vkontakte:'#'},
        {photo: Padalko, name: 'Падалко Александр', position: 'Администратор valorant дисциплины', number: '8914563912', telegram: '#', vkontakte:'#'},
        // {photo: Misha , name: 'Михаил Хориков', position: 'Дизайнер', number: '8914563912', telegram: '#', vkontakte:'#'},
        // {photo: Masha, name: 'Мария Сетежева', position: 'Контент-менеджер', number: '8914563912', telegram: '#', vkontakte:'#'},

    ]

    return (
        <div className={styles.contacts}>
            <h2>Наша команда</h2>
            <div className={styles.contacts_information}>
                {Contacts.map(contact => {
                    return (
                        <AboutUsCard
                            name={contact.name}
                            number={contact.number}
                            position={contact.position}
                            vkontakte={contact.vkontakte}
                            telegram={contact.telegram}
                            photo={contact.photo}
                        />
                    )
                })}
            </div>
            <Link to='/Esports-tournament-7Hills-/'><Button>Назад</Button></Link>
        </div>
    );
};

export default Contacts;
