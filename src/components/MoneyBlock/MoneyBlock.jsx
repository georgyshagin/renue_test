import React from "react";
import { Button } from "../Button/Button";

import styles from "./styles.module.css";

export const MoneyBlock = () => {
  return (
    <div className={styles.root}>
      <div className={styles.block}>
        <h2>Внесите деньги</h2>
        <h4>Принимает: 50, 100, 500, 1000</h4>
        <div>
          <input type="number" />
        </div>
        <Button>Внести</Button>
      </div>
      <div className={styles.block}>
        <h2>Ваш баланс: {1000}</h2>
      </div>
      <div className={styles.block}>
        <h2>Окно выдачи товара</h2>
        <h2>Ваш товар: {"milkyway"}</h2>
      </div>
      <div className={styles.block}>
        <h2>Возьмите сдачу</h2>
        <Button>Получить сдачу</Button>
        <h3>Ваша сдача: {23}</h3>
      </div>
    </div>
  );
};
