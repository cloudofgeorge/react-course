import React from "react";
import styles from "./logo.module.scss";
import { Link } from "react-router-dom";

export const Logo = () => (
  <div className={styles.logo}>
    <Link to="/" className={styles.link}>
      <img src="/logo192.png" alt="logo" width="100%" />
    </Link>
  </div>
);
