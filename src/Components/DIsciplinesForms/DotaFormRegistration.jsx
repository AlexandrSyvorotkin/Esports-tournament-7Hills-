import React, {useState} from 'react';
import styles from './DotaFormRegistation.module.scss'
import axios from "axios";
import {Link} from "react-router-dom";
import ButtonModal from "../../UI/ButtonModal";
import {useForm} from "react-hook-form";

const DotaFormRegistration = () => {

    const [successRegistration, setSuccessRegistration] = useState(false)


    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur'
    })

    const submitHandler = (data) => {
        console.log(data)
        axios.post('https://sheet.best/api/sheets/6ab6ec50-2f81-4d80-b5a2-c874a0bab646', data)
            .then((response)=> {
                reset()
                setSuccessRegistration(true)

        })
    }

    return (
        <div className={styles.dotaFormRegistration}>
            <h2>Регистрация DOTA 2</h2>
            <div className={styles.access}>
                <p>Турнир проводится исключительно для молодёжи города Москвы. Участие других регионов не допускается.</p>
            </div>
            {!successRegistration ?<form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
                <div className={styles.form_section}>
                    <label>Email</label>
                    <input
                        {...register('email', {
                            required: 'Поле обязательно к заполнению',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Введите корректный email'
                            }
                        })}
                        type='text'
                        placeholder='Введите почту'
                    />
                    <div className={styles.form_error}>
                        {errors?.email && <p>{errors?.email?.message || 'Error'}</p>}
                </div>
                </div>
                <div className={styles.form_section}>
                        <label>Имя</label>
                        <input
                            {...register('name', {
                                required: 'Поле обязательно к заполнению',
                            })}
                            type='text'
                            placeholder='Введите ваше имя'
                        />
                        <div className={styles.form_error}>
                            {errors?.name && <p>{errors?.name?.message || 'Error'}</p>}
                        </div>
                </div>
                <div className={styles.form_section}>
                    <label>Фамилия</label>
                    <input
                        {...register('surname', {
                            required: 'Поле обязательно к заполнению',
                        })}
                        type='text'
                        placeholder='Введите ваше Фамилию'
                    />
                    <div className={styles.form_error}>
                        {errors?.surname && <p>{errors?.surname?.message || 'Error'}</p>}
                    </div>
                </div>
                <div className={styles.form_section}>
                    <label>Отчество</label>
                    <input
                        {...register('patronymic', {
                            required: 'Поле обязательно к заполнению',
                        })}
                        type='text'
                        placeholder='введите ваше отчество'
                    />
                    <div className={styles.form_error}>
                        {errors?.patronymic && <p>{errors?.patronymic?.message || 'Error'}</p>}
                    </div>
                </div>
                <div className={styles.form_section}>
                    <label>Номер телефона</label>
                    <input
                        {...register('number', {
                            required: 'Поле обязательно к заполнению',
                            minLength: {
                                value: 11,
                                message: 'Введите корректный телефонный номер из 11 символов через 8'
                            }
                        })}
                        type='number'
                        placeholder='введите номер телефона через 8'
                    />
                    <div className={styles.form_error}>
                        {errors?.number && <p>{errors?.number?.message || 'Error'}</p>}
                    </div>
                </div>
                <div className={styles.form_section}>
                    <label>Ссылка на страницу Вконтакте</label>
                    <input
                        {...register('vkontakte', {
                            required: 'Поле обязательно к заполнению',
                        })}
                        type='text'
                        placeholder='vk.com/'
                    />
                    <div className={styles.form_error}>
                        {errors?.vkontakte && <p>{errors?.vkontakte?.message || 'Error'}</p>}
                    </div>
                </div>
                <div className={styles.form_section}>
                    <label>Организация которую вы представляете</label>
                    <input
                        {...register('organization', {
                            required: 'Поле обязательно к заполнению',
                        })}
                        type='text'
                        placeholder='ВУЗ, предприятие, школа и др.'
                    />
                    <div className={styles.form_error}>
                        {errors?.organization && <p>{errors?.organization?.message || 'Error'}</p>}
                    </div>
                </div>
                <div className={styles.form_section}>
                    <label>Никнейм капитана</label>
                    <input
                        {...register('nickname', {
                            required: 'Поле обязательно к заполнению',
                        })}
                        type='text'
                        placeholder='Введите никнейм'
                    />
                    <div className={styles.form_error}>
                        {errors?.nickname && <p>{errors?.nickname?.message || 'Error'}</p>}
                    </div>
                </div>
                <div className={styles.form_section}>
                    <label>Название вашей команды</label>
                    <input
                        {...register('teamName', {
                            required: 'Поле обязательно к заполнению',
                        })}
                        type='text'
                        placeholder='Введите никнейм'
                    />
                    <div className={styles.form_error}>
                        {errors?.teamName && <p>{errors?.teamName?.message || 'Error'}</p>}
                    </div>
                </div>
                    <div className={styles.form_section}>
                        <label>Steam профиль капитана</label>
                        <input
                            {...register('steamProfile', {
                                required: 'Поле обязательно к заполнению',
                            })}
                            placeholder='steam профиль'
                        />
                        <div className={styles.form_error}>
                            {errors?.steamProfile && <p>{errors?.steamProfile?.message || 'Error'}</p>}
                        </div>
                    </div>


                <div className={styles.form_ckeckboxes}>
                    <div className={styles.agreement}>
                        <input type="checkbox" id='age' required/>
                        <label htmlFor='age' >Мне исполнилось 18 лет</label></div>
                    <div className={styles.agreement}>
                        <input id='agreement' type="checkbox" required/>
                        <label htmlFor='agreement'>Я согласен на обработку персональных данных</label>
                    </div>
                </div>


                <div className={styles.registation_footer}>
                    <Link to='/'><ButtonModal>Главная</ButtonModal></Link>
                    <ButtonModal type='submit' >Отравить</ButtonModal>
                </div>

            </form>
            : <div className={styles.success_registration}>
                <p>Регистрация прошла успешно!</p>
                    <Link to='/'><ButtonModal>Главная</ButtonModal></Link>
            </div>}
        </div>
    );
};

export default DotaFormRegistration;
