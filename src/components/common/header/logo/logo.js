import React from "react";
import styles from "./logo.module.scss";
import { Link } from "react-router-dom";

export const Logo = () => (
  <div className={styles.logo}>
    <Link to="/">Awesome store</Link>
  </div>
);
