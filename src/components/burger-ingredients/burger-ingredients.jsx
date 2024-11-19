import React from "react";
import styles from "./burger-ingredients.module.css";
import TabList from "./tab-list/tab-list";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import n200i from "../../images/N-200i.png";
import r2d3 from "../../images/R2-D3.png";

function BurgerIngredients() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Соберите бургер</h2>
      <TabList />
      <h3 className={styles.tabName}>Булки</h3>
      <div className={styles.items}>
        <div className={styles.item}>
          <img className={styles.img} src={n200i}></img>
          <div className={styles.priceBox}>
            <h3 className={styles.price}>20</h3>
            <CurrencyIcon />
          </div>
          <p className={styles.description}>Краторная булка N-200i</p>
        </div>
        <div className={styles.item}>
          <img className={styles.img} src={r2d3}></img>
          <div className={styles.priceBox}>
            <h3 className={styles.price}>20</h3>
            <CurrencyIcon />
          </div>
          <p className={styles.description}>Флюоресцентная булка R2-D3</p>
        </div>
      </div>
    </section>
  );
}

export default BurgerIngredients;
