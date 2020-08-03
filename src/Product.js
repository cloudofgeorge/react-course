import React from 'react';
import './Product.css';

const Product = props => (
    <div className="product">
        <div>Product: {props.name}</div>
        <div>Count: {props.count}</div>
        <div>description: {props.children}</div>
        <button>Buy</button>
    </div>
);

export default Product;
