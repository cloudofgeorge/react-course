import React, { useCallback } from "react";
import styles from "./products-list.module.scss";
import { Product } from "../product";

export const ProductsList = ({
  products,
  addCartItem,
  removeCartItem,
  cart,
}) => {
  const productInCart = useCallback(
    (product) => !!cart.find((item) => item.id === product.id),
    [cart]
  );

  return (
    <div className={styles.list}>
      {products.map((product) => (
        <Product
          key={product.id}
          addToCart={addCartItem}
          removeFromCart={removeCartItem}
          inCart={productInCart(product)}
          product={product}
        />
      ))}
    </div>
  );
};
