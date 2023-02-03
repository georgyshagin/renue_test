import React from "react";
import { Button } from "../Button/Button";

import styles from "./styles.module.css";

export const Card = ({ card }) => {
  return (
    <div className={styles.root}>
      <img
        className={styles.img}
        src={"../../renue_test/build/data/products/" + card.img}
        alt={card.name}
      />
      <h2 className={styles.title}>{card.name}</h2>
      <p className={styles.price}>Цена: {card.price}</p>
      <p className={styles.count}>Количество: {card.count}</p>
      <Button>Выбрать</Button>
    </div>
  );
};
