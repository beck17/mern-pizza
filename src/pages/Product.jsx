import React from 'react';

import styles from '../styles/pages/Product.module.css'

const Product = () => {
    // const [size, setSize] = useState(0);
    // const [price, setPrice] = useState(product.prices[0].price);
    // const [quantity, setQuantity] = useState(1);
    // const [extras, setExtras] = useState([]);
    //
    // const changePrice = (number) => {
    //     setPrice(price + number);
    // };
    //
    // const handleSize = (sizeIndex) => {
    //     const difference = product.prices[sizeIndex].price - product.prices[size].price;
    //     setSize(sizeIndex);
    //     changePrice(difference);
    // };
    //
    // const handleChange = (e, option) => {
    //     const checked = e.target.checked;
    //
    //     if (checked) {
    //         changePrice(option.price);
    //         setExtras((prev) => [...prev, option]);
    //     } else {
    //         changePrice(-option.price);
    //         setExtras(extras.filter((extra) => extra._id !== option._id));
    //     }
    // };

    return (

        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <img src='img/pizza.png' alt='pizza'/>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>title</h1>
                <span className={styles.price}>{`100 ₽ | 360 г`}</span>
                {/*<p className={styles.desc}>{product.desc + extras.map(extra => ', ' + extra.text.toLowerCase())}</p>*/}

                <h3 className={styles.choose}>Выберите размер</h3>
                <div className={styles.sizes}>
                    <div className={styles.size}>
                        <img src="/img/size.png" alt=""/>
                        <span
                            className={styles.number}>30 см.</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Выберите дополнительные ингредиенты</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option} >
                        <input
                            type="checkbox"
                            id='text'
                            name='text'
                            className={styles.checkbox}
                        />
                        <label htmlFor="double">text (100 ₽)</label>
                    </div>
                </div>
                <h3 className={styles.choose}>Пищевая ценность на 100 г.</h3>
                <p className={styles.desc}>Энерг. ценность:  ккал</p>
                <p className={styles.desc}>Белки:  г.</p>
                <p className={styles.desc}>Жиры:  г.</p>
                <p className={styles.desc}>Углеводы:  г.</p>

                <div className={styles.add}>
                    <input type="number" defaultValue={1} min={1} max={10} className={styles.quantity}/>
                    <button className={styles.button}>Добавить</button>
                </div>
            </div>
        </div>
    );
};

export default Product;