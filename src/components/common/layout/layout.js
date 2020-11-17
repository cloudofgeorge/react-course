import React from "react";
import styles from "./layout.module.scss";
import { Header } from "../header";
import { Footer } from "../footer";
import { MainContent } from "../main-content";
import { PageTitle } from "../page-title";

export const Layout = ({ children, title, aside }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {title && <PageTitle>{title}</PageTitle>}
      <MainContent>
        {aside && <aside>{aside}</aside>}
        <main>{children}</main>
      </MainContent>
      <Footer />
    </div>
  );
};
