import React, {useState} from 'react';
import styles from "./FormRegistation.module.scss";
import {Link} from "react-router-dom";
import ButtonModal from "../../UI/ButtonModal";
import {useForm} from "react-hook-form";
import axios from "axios";
import FormSection from "./FormSection";
import AgreementCheckbox from "./AgreementCheckbox";

const FormRegistration = ({url, registrationDisciplineName, dota, valorant, cs, fifa, backgroundImage}) => {

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
        axios.post(url, data)
            .then((response) => {
                reset()
                setSuccessRegistration(true)
            })
    }

    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover'
        }}>
            <div className={styles.formRegistration}>
                <h2>{registrationDisciplineName}</h2>
                <div className={styles.access}>
                    <p>Турнир проводится исключительно для молодёжи города Москвы. Участие других регионов не
                        допускается.</p>
                </div>
                {!successRegistration ? <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
                        <FormSection
                            placeholder={'Введите почту'}
                            type={'text'}
                            errors={errors}
                            formLabel={'Email'}
                            params={{
                                ...register('email', {
                                    required: 'Поле обязательно к заполнению',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Введите корректный email'
                                    }
                                })
                            }}
                        />
                        <FormSection
                            placeholder={'Введите ваше имя'}
                            type={'text'}
                            errors={errors}
                            formLabel={'Имя'}
                            params={{
                                ...register('name', {
                                    required: 'Поле обязательно к заполнению',
                                })
                            }}
                        />
                        <FormSection
                            placeholder={'Введите вашу фамилию'}
                            type={'text'}
                            errors={errors}
                            formLabel={'Фамилия'}
                            params={{
                                ...register('surname', {
                                    required: 'Поле обязательно к заполнению',
                                })
                            }}
                        />
                        <FormSection
                            placeholder={'Введите ваше отчество'}
                            type={'text'}
                            errors={errors}
                            formLabel={'Отчество'}
                            params={{
                                ...register('patronymic', {
                                    required: 'Поле обязательно к заполнению',
                                })
                            }}
                        />
                        <FormSection
                            placeholder={'введите номер телефона через 8'}
                            type={'number'}
                            errors={errors}
                            formLabel={'Номер телефона'}
                            params={{
                                ...register('number', {
                                    required: 'Поле обязательно к заполнению',
                                    minLength: {
                                        value: 11,
                                        message: 'Введите корректный телефонный номер из 11 символов через 8'
                                    }
                                })
                            }}
                        />
                        <FormSection
                            placeholder={'vk.com/'}
                            type={'text'}
                            errors={errors}
                            formLabel={'Ссылка на страницу Вконтакте'}
                            params={{
                                ...register('vkontakte', {
                                    required: 'Поле обязательно к заполнению',
                                })
                            }}
                        />
                        <FormSection
                            placeholder={'ВУЗ, предприятие, школа и др.'}
                            type={'text'}
                            errors={errors}
                            formLabel={'Организация которую вы представляете'}
                            params={{
                                ...register('organization', {
                                    required: 'Поле обязательно к заполнению',
                                })
                            }}
                        />
                        {fifa ? <FormSection
                            placeholder={'Введите ваш игровой никнейм'}
                            type={'text'}
                            errors={errors}
                            formLabel={'Ваш никнейм'}
                            params={{
                                ...register('nickname', {
                                    required: 'Поле обязательно к заполнению',
                                })
                            }}
                        /> : null}
                        {dota || cs ? <FormSection
                            placeholder={'Введите никнейм'}
                            type={'text'}
                            errors={errors}
                            formLabel={'Никнейм капитана'}
                            params={{
                                ...register('nickname', {
                                    required: 'Поле обязательно к заполнению',
                                })
                            }}
                        /> : null}
                        {valorant ? <FormSection
                            placeholder={'ссылки на профили steam вас, и всех участников команды'}
                            type={'text'}
                            errors={errors}
                            formLabel={'Riot ID#Метка'}
                            params={{
                                ...register('riotId', {
                                    required: 'Поле обязательно к заполнению',
                                })
                            }}
                        /> : null}
                        {dota || cs || valorant ? <FormSection
                            placeholder={'Введите название вашей команды'}
                            type={'text'}
                            errors={errors}
                            formLabel={'Название вашей команды'}
                            params={{
                                ...register('teamName', {
                                    required: 'Поле обязательно к заполнению',
                                })
                            }}
                        /> : null}
                        {dota || cs ? <FormSection
                            placeholder={'steam профиль'}
                            type={'text'}
                            errors={errors}
                            formLabel={'Steam профиль капитана'}
                            params={{
                                ...register('steamProfile', {
                                    required: 'Поле обязательно к заполнению',
                                })
                            }}
                        /> : null}
                        <div className={styles.form_checkbox}>
                            <AgreementCheckbox
                                type={'checkbox'}
                                htmlFor={'age'}
                                agreementText={'Мне исполнилось 18 лет'}
                                id={'age'}
                            />
                            <AgreementCheckbox
                                type={'checkbox'}
                                htmlFor={'agreement'}
                                agreementText={'Я согласен на обработку персональных данных'}
                                id={'agreement'}/>
                        </div>
                        <div className={styles.registration_footer}>
                            <Link to='/'><ButtonModal>Главная</ButtonModal></Link>
                            <ButtonModal type='submit'>Отравить</ButtonModal>
                        </div>
                    </form>
                    : <div className={styles.success_registration}>
                        <p>Регистрация прошла успешно!</p>
                        <Link to='/'><ButtonModal>Главная</ButtonModal></Link>
                    </div>}
                {/*<div className={styles.success_registration}>*/}
                {/*    <p>Регистрация закончилась</p>*/}
                {/*    <Link to='/'><ButtonModal>Главная</ButtonModal></Link>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default FormRegistration;
