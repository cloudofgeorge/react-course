import React from "react";
import "./Product.css";

const Product = (props) => {
    const classNames = ['product'];

    if (props.inCart) {
        classNames.push('inCart');
    }

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
