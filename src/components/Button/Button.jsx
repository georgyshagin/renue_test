import React from "react";

import styles from "./styles.module.css";

export const Button = ({ children, onClick = () => {} }) => {
  return (
    <button className={styles.root} onClick={onClick}>
      {children}
    </button>
  );
};
