import React from "react";
import styles from "./navigation.module.scss";
import { Link } from "react-router-dom";

export const Navigation = () => (
  <div className={styles.navigation}>
    <Link to="/catalog">Catalog</Link>
  </div>
);
