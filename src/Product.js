import React from "react";
import styles from "./Product.module.scss";

const Product = (props) => {
    const classNames = [styles.product];

    if (props.inCart) {
        classNames.push(styles.inCart);
    }

    console.log(styles)
    return (
        <div className={classNames.join(' ')}>
            <div>Product: {props.name}</div>
            <div>Count: {props.count}</div>
            <div>description: {props.children}</div>
            <button onClick={props.addToCart}>Buy</button>
        </div>
    );
};

export default Product;
