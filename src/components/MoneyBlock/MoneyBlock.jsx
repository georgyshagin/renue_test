import React from "react";
import { Button } from "../Button/Button";
import { BuyBlock } from "../BuyBlock/BuyBlock";

import styles from "./styles.module.css";

export const MoneyBlock = () => {
  return (
    <div className={styles.root}>
      <BuyBlock title={"Внесите деньги"}>
        <form className={styles.form}>
          <select name="enterMoney" className={styles.enterMoney}>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
          </select>
        </form>
        <Button>Внести</Button>
      </BuyBlock>

      <BuyBlock title={`Ваш баланс: ${1000}`}></BuyBlock>

      <BuyBlock
        title={"Окно выдачи товара"}
        subtitle={`Ваш товар: ${"milkyway"}`}
      ></BuyBlock>

      <BuyBlock title={"Возьмите сдачу"} subtitle={`Ваша сдача: ${273}`}>
        <Button>Получить сдачу</Button>
      </BuyBlock>
    </div>
  );
};
