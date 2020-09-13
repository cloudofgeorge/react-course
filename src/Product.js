import React from 'react';

const Product = props => (
    <div>
        <div>Product: {props.name}</div>
        <div>Count: {props.count}</div>
        <div>description: {props.children}</div>
        <button>Buy</button>
    </div>
);

export default Product;
