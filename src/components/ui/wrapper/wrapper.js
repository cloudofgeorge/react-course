import React from "react";
import clsx from "clsx";
import styles from "./wrapper.module.scss";

export const Wrapper = ({ className, children }) => (
  <div className={clsx([styles.wrapper, className])}>{children}</div>
);
