import React from "react";

const Product = (props) => (
  <div>
    <div>Product: {props.name}</div>
    <div>Count: {props.count}</div>
    <div>description: {props.children}</div>
    <button onClick={props.addToCart}>Buy</button>
  </div>
);

export default Product;
