import React from "react";
import styles from "./styles.module.css";

export const BuyBlock = ({ children, title, subtitle, descr }) => {
  return (
    <div className={styles.root}>
      <h2>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <h4 className={styles.descr}>{descr}</h4>
      {children}
    </div>
  );
};
