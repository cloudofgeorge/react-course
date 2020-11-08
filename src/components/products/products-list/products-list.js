import React from "react";
import styles from "./products-list.module.scss";
import { Product } from "../product";

export const ProductsList = ({ products, toggleCart, cart }) => {
  return (
    <div className={styles.list}>
      {products.map((product) => (
        <Product
          key={product.id}
          toggleCart={toggleCart}
          inCart={cart.includes(product.id)}
          {...product}
        />
      ))}
    </div>
  );
};
