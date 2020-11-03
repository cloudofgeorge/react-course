import React from "react";
import styles from "./layout.module.scss";
import { Header } from "../header";
import { Content } from "../content";
import { Footer } from "../footer";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};
