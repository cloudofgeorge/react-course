import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.module.scss';

export const Navigation = () => (
  <div className={styles.navigation}>
    <Link to="/catalog">Catalog</Link>
  </div>
);
