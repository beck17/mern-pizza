import React from 'react';

import {ProductCart} from "./";

import styles from '../styles/components/ProductList.module.css'

const ProductList = () => {
    return (
        <>
            <h2>Пицца</h2>
            <div className={styles.wrapper}>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
            </div>
        </>
    );
};

export default ProductList;