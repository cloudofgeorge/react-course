import React from "react";
import styles from "./products-list.module.scss";
import { Product } from "../product";

export const ProductsList = ({ products, addToCart, removeFromCart, cart }) => {
  const productInCart = (product) =>
    !!cart.find((item) => item.id === product.id);

  return (
    <div className={styles.list}>
      {products.map((product) => (
        <Product
          key={product.id}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          inCart={productInCart(product)}
          product={product}
        />
      ))}
    </div>
  );
};
