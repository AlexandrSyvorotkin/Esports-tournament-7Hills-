import React, {useState} from 'react';
import styles from './DotaFormRegistation.module.scss'
import axios from "axios";
import {Link} from "react-router-dom";

const DotaFormRegistation = () => {

    // form state
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [number, setNumber] = useState('');
    const [vkontakte, setVkontakte] = useState('')
    const [organization, setOrganization] = useState('')
    const [nickname, setNickName] = useState('')
    const [teamName, setTeamName] = useState('')
    const [steamProfile, setSteamProfile] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(email, name, surname, patronymic)
        const data = {
            Name: email,
            Age: name,
            Surname: surname,
            Patronymic: patronymic,
            Number: number,
            Vkontakte: vkontakte,
            Organization: organization,
            Nickname: nickname,
            TeamName: teamName,
            SteamProfile: steamProfile
        }
        axios.post('https://sheet.best/api/sheets/6ab6ec50-2f81-4d80-b5a2-c874a0bab646', data).then((response)=> {
            console.log(response)
            setEmail('')
            setName('')
            setSurname('')
            setPatronymic('')
            setNumber('')
            setVkontakte('')
            setOrganization('')
            setNickName('')
            setTeamName('')
            setSteamProfile('')
        })
    }


    return (
        <div className={styles.dotaFormRegistration}>
            <h2>Регистрация DOTA 2</h2>
            <form autoComplete='off' className={styles.form} onSubmit={submitHandler}>
                <div className={styles.form_section}>
                    <label>Email</label>
                    <input type="text" placeholder='Введите почту' required
                           onChange={(e) => setEmail(e.target.value)} value={email}
                    />
                    <br/>
                </div>
                <div className={styles.form_section}>
                    <label>Имя</label>
                    <input type="text" placeholder='Введите ваше Имя' required
                           onChange={(e) => setName(e.target.value)} value={name}
                    />
                    <br/>
                </div>
                <div className={styles.form_section}>
                    <label>Фамилия</label>
                    <input type="text" placeholder='Введите вашу фамилию' required
                           onChange={(e) => setSurname(e.target.value)} value={surname}
                    />
                    <br/>
                </div>
                <div className={styles.form_section}>
                    <label>Отчество</label>
                    <input type="text" placeholder='Введите вашу фамилию' required
                           onChange={(e) => setPatronymic(e.target.value)} value={patronymic}
                    />
                    <br/>
                </div>
                <div className={styles.form_section}>
                    <label>Номер телефона</label>
                    <input type="number" placeholder='Введите ваш номер телефона' required
                           onChange={(e) => setNumber(e.target.value)} value={number}
                    />
                    <br/>
                </div>
                <div className={styles.form_section}>
                    <label>Ссылка на страницу вконтакте</label>
                    <input type="text" placeholder='vk/' required
                           onChange={(e) => setVkontakte(e.target.value)} value={vkontakte}
                    />
                    <br/>
                </div>
                <div className={styles.form_section}>
                    <label>Организация, которую вы представляете</label>
                    <input type="text" placeholder='ВУЗ, предприятие школа' required
                           onChange={(e) => setOrganization(e.target.value)} value={organization}
                    />
                    <br/>
                </div>
                <div className={styles.form_section}>
                    <label>Никнейм капитана</label>
                    <input type="text" placeholder='Важно указать никнейм капитана который будет на протяжении всего турнира' required
                           onChange={(e) => setNickName(e.target.value)} value={nickname}
                    />
                    <br/>
                </div>
                <div className={styles.form_section}>
                    <label>Название команды</label>
                    <input type="text" placeholder='Важно указать никнейм капитана который будет на протяжении всего турнира' required
                           onChange={(e) => setTeamName(e.target.value)} value={teamName}
                    />
                    <br/>
                </div>
                <div className={styles.form_section}>
                    <label>Steam профиль капитана</label>
                    <input type="text" placeholder='Важно указать никнейм капитана который будет на протяжении всего турнира' required
                           onChange={(e) => setSteamProfile(e.target.value)} value={steamProfile}
                    />
                    <br/>
                </div>
                <div>
                    <button type='submit'>Отравить</button>
                    <Link to='/Esports-tournament-7Hills-'><button>Главная</button></Link>
                </div>

            </form>
        </div>
    );
};

export default DotaFormRegistation;
