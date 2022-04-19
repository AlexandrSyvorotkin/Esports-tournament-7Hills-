import React, {useEffect, useRef, useState} from 'react';
import styles from './CounterTimer.module.scss'

const CounterTimer = () => {



    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countdownDate = new Date('May 1 2022 00:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {

            } else {
                clearInterval(interval.current)
                // update timer
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }

        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    }, [])


    return (
        <div className={styles.timer_wrapper}>
            <div className={styles.timer}>
                <div className={styles.timer_header}>До конца регистрации осталось</div>
                <div className={styles.remainig_time}>
                    <span>{timerDays}</span>
                    <span>дней</span>
                    <span>{timerHours}</span>
                    <span>часов</span>
                    <span>{timerMinutes}</span>
                    <span>минут</span>
                    <span>{timerSeconds}</span>
                    <span>секунд</span>
                </div>
            </div>
        </div>

    )
        ;
};

export default CounterTimer;
