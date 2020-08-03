import React from "react";
import "./Product.css";

const Product = (props) => (
  <div className="product">
    <div>Product: {props.name}</div>
    <div>Count: {props.count}</div>
    <div>description: {props.children}</div>
    <button onClick={props.addToCart}>Buy</button>
  </div>
);

export default Product;
