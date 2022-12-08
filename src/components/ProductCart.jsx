import React from 'react';

import styles from '../styles/components/ProductCart.module.css'
import {Link} from "react-router-dom";

const ProductCart = () => {
    return (
        <div className={styles.container}>

            <Link to='/product'>
                <img src='img/pizza.png' alt='pizza' width="200" height="200"/>
            </Link>
            <h1 className={styles.title}>title</h1>
            <span
                className={styles.price}>100p</span>
            <p className={styles.desc}>
                desc
            </p>
        </div>
    );
};

export default ProductCart;