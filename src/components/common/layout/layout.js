import React from "react";
import styles from "./layout.module.scss";
import { Header } from "../header";
import { Footer } from "../footer";
import { MainContent } from "../main-content";
import { PageTitle } from "../page-title";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <PageTitle>Products page</PageTitle>
      <MainContent>
        <aside>aside content</aside>
        <main>{children}</main>
      </MainContent>
      <Footer />
    </div>
  );
};
