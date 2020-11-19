import React from "react";
import styles from "./product.module.scss";
import { PRICE_SYMBOL } from "../../../constants";
import { Link } from "react-router-dom";

export const Product = ({ product, toggleCart, inCart }) => {
  const { id, title, image, price } = product;
  return (
    <div className={styles.product}>
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
        <button onClick={() => toggleCart(product)}>
          {inCart ? "Remove" : "Buy"}
        </button>
      </div>
    </div>
  );
};
