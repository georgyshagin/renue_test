import React, { useState } from "react";
import { Cards } from "../../components/Cards/Cards";
// import classnames from "classnames";
import styles from "./styles.module.css";
import { cards } from "../../data/cards";

export const VendingPage = () => {
  const [activeCardId, setActiveCardId] = useState();
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Вендинговый аппарат</h1>
      <Cards
        onCardClick={setActiveCardId}
        cardId={activeCardId}
        cards={cards}
      />
    </div>
  );
};
