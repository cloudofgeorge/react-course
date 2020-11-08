import React from "react";
import styles from "./header.module.scss";
import { Wrapper } from "../../ui/wrapper";
import { Cart } from "./cart";

export const Header = () => (
  <header className={styles.header}>
    <Wrapper className={styles.wrapper}>
      <div>Left side</div>
      <div>
        <Cart />
      </div>
    </Wrapper>
  </header>
);
