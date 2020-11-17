import React from "react";
import styles from "./products-filters.module.scss";
import { Radio } from "../../ui";

export const ProductsFilters = ({ title, data, onChange, filter }) => {
  return (
    <div>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.productsFilters}>
        <Radio
          text="all"
          value="all"
          checked={filter === "all"}
          onChange={onChange}
        />
        {data.map((item) => (
          <Radio
            key={item}
            text={item}
            value={item}
            checked={filter === item}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};
