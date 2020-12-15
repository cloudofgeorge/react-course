import React from 'react';
import clsx from 'clsx';
import { Wrapper } from '../../ui/wrapper';
import styles from './main-content.module.scss';

export const MainContent = ({ children, withAside }) => (
  <Wrapper className={clsx(styles.mainContent, { [styles.withAside]: withAside })}>{children}</Wrapper>
);
