import React, { useState } from "react";
import { Button } from "../Button/Button";
import { BuyBlock } from "../BuyBlock/BuyBlock";

import styles from "./styles.module.css";

export const MoneyBlock = () => {
  const [enteredMoneyValue, setEnteredMoneyValue] = useState(50);
  const [activeMoneyValue, setActiveMoneyValue] = useState(0);
  const checkTotalBalance = () =>
    setActiveMoneyValue(+enteredMoneyValue + +activeMoneyValue);

  return (
    <div className={styles.root}>
      <BuyBlock title={"Внесите деньги"}>
        <form className={styles.form}>
          <select
            name="enterMoney"
            value={enteredMoneyValue}
            onChange={(e) => setEnteredMoneyValue(e.target.value)}
            className={styles.enterMoney}
          >
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
          </select>
        </form>
        <Button onClick={checkTotalBalance}>Внести</Button>
      </BuyBlock>

      <BuyBlock title={`Ваш баланс: ${activeMoneyValue}`}></BuyBlock>

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
