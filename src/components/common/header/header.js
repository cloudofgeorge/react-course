import React from "react";
import styles from "./header.module.scss";
import { Wrapper } from "../../ui/wrapper";
import { Cart } from "./cart";
import { Logo } from "./logo/logo";

export const Header = () => (
  <header className={styles.header}>
    <Wrapper className={styles.wrapper}>
      <div>
        <Logo />
      </div>
      <div>
        <Cart />
      </div>
    </Wrapper>
  </header>
);
