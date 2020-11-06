import React from "react";
import { Wrapper } from "../../ui/wrapper";
import styles from "./main-content.module.scss";

export const MainContent = ({ children }) => (
  <Wrapper className={styles.mainContent}>{children}</Wrapper>
);
