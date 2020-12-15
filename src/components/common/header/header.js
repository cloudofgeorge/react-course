import React from 'react';
import styles from './header.module.scss';
import { Wrapper } from '../../ui';
import { Cart } from './cart';
import { Logo } from './logo';
import { Navigation } from './navigation';

export const Header = () => (
  <header className={styles.header}>
    <Wrapper className={styles.wrapper}>
      <div className={styles.leftSide}>
        <Logo />
        <Navigation />
      </div>
      <div>
        <Cart />
      </div>
    </Wrapper>
  </header>
);
