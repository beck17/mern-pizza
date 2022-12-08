import React from 'react';
import {Link} from "react-router-dom";

import styles from '../../styles/pages/Auth.module.css'

const Register = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Регистрация</h1>
            <div className={styles.form}>
                <input className={styles.input} type="text" placeholder='Имя'/>
                <input className={styles.input} type="email" placeholder='Email' />
                <input className={styles.input} type="password" placeholder='Пароль' />
                <input className={styles.input} type="password" placeholder='Повторите пароль' />
                <button className={styles.btn}>Зарегистрироваться</button>
            </div>
            <p className={styles.text}>У вас уже есть аккаунт? <Link to='/auth/login'>
                Войти
            </Link>
            </p>
            {/*{errors && <span className={styles.error}>Ошибка при регистрации</span>}*/}
        </div>
    );
};

export default Register;