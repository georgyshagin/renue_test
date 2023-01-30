import React from "react";

// import { cards } from "../../data/cards";
import styles from "./styles.module.css";

export const Card = ({ card }) => {
  return (
    <div className={styles.root}>
      <img
        className={styles.img}
        src={"../../data/products/" + card.img}
        alt={card.name}
      />
      <h2 className={styles.title}>{card.name}</h2>
      <p className={styles.price}>Цена: {card.price}</p>
      <p className={styles.count}>Количество: {card.count}</p>
      <button>Добавить</button>
    </div>
  );
};
