import React from 'react';

const Product = props => (
    <div className="product">
        <div>Product: {props.name}</div>
        <div>Count: {props.count}</div>
        <button>Buy</button>
    </div>
);

export default Product;
