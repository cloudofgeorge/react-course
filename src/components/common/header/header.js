import React from "react";
import styles from "./header.module.scss";
import { Wrapper } from "../../ui/wrapper";

export const Header = () => (
  <header className={styles.header}>
    <Wrapper className={styles.wrapper}>
      <div>Left side</div>
      <div>
        <input type="text" value="" placeholder="search" />
      </div>
      <div>right side</div>
    </Wrapper>
  </header>
);
