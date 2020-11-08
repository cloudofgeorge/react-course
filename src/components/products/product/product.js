import React from "react";
import styles from "./product.module.scss";
import { PRICE_SYMBOL } from "../../../constants";

export const Product = ({ id, title, image, price, toggleCart, inCart }) => (
  <div className={styles.product}>
    <picture>
      <img
        className="p1g8n69v_plp"
        width="200"
        height="200"
        alt={title}
        src={image}
        itemProp="image"
        loading="lazy"
      />
    </picture>
    <div>{title}</div>
    <div>
      {price}
      {PRICE_SYMBOL}
    </div>
    <div className={styles.bottom}>
      <button onClick={() => toggleCart(id)}>
        {inCart ? "Remove" : "Buy"}
      </button>
    </div>
  </div>
);
