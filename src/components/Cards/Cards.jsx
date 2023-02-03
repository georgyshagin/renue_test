import React from "react";
import { Card } from "../Card/Card";
import styles from "./styles.module.css";

export const Cards = ({ cards }) => {
  return (
    <>
      {cards.length > 0 ? (
        <div className={styles.root}>
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <div>Empty</div>
      )}
    </>
  );
};
