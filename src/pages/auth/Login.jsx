import React from 'react';
import {Link} from "react-router-dom";

import styles from '../../styles/pages/Auth.module.css'

const Login = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Войти</h1>
            <div className={styles.form}>
                <input className={styles.input} type="email" placeholder='Email'/>
                <input className={styles.input} type="password" placeholder='Пароль'/>
                <button className={styles.btn}>Войти</button>
            </div>
            <p className={styles.text}>Нет аккаунта? <Link to='/auth/register'>
                     Зарегистрируйтесь
                </Link>
            </p>
            {/*{errors && <span className={styles.error}>Ошибка при регистрации</span>}*/}
        </div>
    );
};

export default Login;