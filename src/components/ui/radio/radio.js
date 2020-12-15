import React from 'react';
import clsx from 'clsx';
import styles from './radio.module.scss';

export const Radio = ({ className, value, text, checked, onChange }) => (
  <label className={clsx([styles.radio, className])}>
    <input type="radio" value={value} checked={checked} onChange={onChange} />
    <span>{text}</span>
  </label>
);
