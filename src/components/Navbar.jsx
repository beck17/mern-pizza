import React from 'react';
import {Link} from "react-router-dom";

import styles from '../styles/components/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link to='/'>
                <div className={styles.itemLogo}>
                    <img src="./img/logo.png" alt="logo" width="80" height="80"/>
                    <p className={styles.texts}>Одинцов Пицца</p>
                </div>
            </Link>

            <div className={styles.item}>
                <div className={styles.cart}>
                    <Link to='/cart'>
                        <img src="./img/cart.png" alt="cart" width="35px" height="35px"/>
                        <div className={styles.counter}>0</div>
                    </Link>
                </div>
                <Link to='/auth/login'>
                    <button className={styles.button}>Войти</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;