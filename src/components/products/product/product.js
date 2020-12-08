import React, { useContext } from "react";
import styles from "./product.module.scss";
import { PRICE_SYMBOL } from "../../../constants";
import { Link } from "react-router-dom";
import { TestContext } from "../../../context";

export const Product = ({ product, addToCart, removeFromCart, inCart }) => {
  const { id, title, image, price } = product;
  const context = useContext(TestContext);

  return (
    <div className={styles.product}>
      {context}
      <Link to={`/catalog/${id}`}>
        <picture>
          <img
            width="200"
            height="200"
            alt={title}
            src={image}
            itemProp="image"
            loading="lazy"
          />
        </picture>
      </Link>

      <div>{title}</div>
      <div>
        {price}
        {PRICE_SYMBOL}
      </div>
      <div className={styles.bottom}>
        {inCart ? (
          <button onClick={() => removeFromCart(product)}>Remove</button>
        ) : (
          <button onClick={() => addToCart(product)}>Buy</button>
        )}
      </div>
    </div>
  );
};
