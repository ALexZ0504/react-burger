import React from "react";
import styles from "./burger-ingredients.module.css";
import TabList from "./tab-list/tab-list";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import n200i from "../../images/N-200i.png";
import r2d3 from "../../images/R2-D3.png";
import spicyX from "../../images/Spicy-X.png";
import space from "../../images/Space_Sause.png";
import traditional from "../../images/Traditional_Sause.png";
import antarian from "../../images/Antarian_Sause.png";

function BurgerIngredients() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Соберите бургер</h2>
      <TabList />
      <div className={styles.items}>
        <h3 className={styles.tabName}>Булки</h3>
        <div className={styles.item}>
          <img className={styles.img} src={n200i}></img>
          <div className={styles.priceBox}>
            <h3 className="text text_type_digits-default">20</h3>
            <CurrencyIcon />
          </div>
          <p className="text text_type_main-small">Краторная булка N-200i</p>
        </div>
        <div className={styles.item}>
          <img className={styles.img} src={r2d3}></img>
          <div className={styles.priceBox}>
            <h3 className="text text_type_digits-default">20</h3>
            <CurrencyIcon />
          </div>
          <p className="text text_type_main-small">
            Флюоресцентная булка R2-D3
          </p>
        </div>
        <h3 className={styles.tabName}>Соусы</h3>
        <div className={styles.item}>
          <img className={styles.img} src={spicyX}></img>
          <div className={styles.priceBox}>
            <h3 className="text text_type_digits-default">30</h3>
            <CurrencyIcon />
          </div>
          <p className="text text_type_main-small">Соус Spicy-X</p>
        </div>
        <div className={styles.item}>
          <img className={styles.img} src={space}></img>
          <div className={styles.priceBox}>
            <h3 className="text text_type_digits-default">30</h3>
            <CurrencyIcon />
          </div>
          <p className="text text_type_main-small">
            Соус фирменный Space Sauce
          </p>
        </div>
        <div className={styles.item}>
          <img className={styles.img} src={traditional}></img>
          <div className={styles.priceBox}>
            <h3 className="text text_type_digits-default">30</h3>
            <CurrencyIcon />
          </div>
          <p className="text text_type_main-small">
            Соус традиционный галактический
          </p>
        </div>
        <div className={styles.item}>
          <img className={styles.img} src={antarian}></img>
          <div className={styles.priceBox}>
            <h3 className="text text_type_digits-default">30</h3>
            <CurrencyIcon />
          </div>
          <p className="text text_type_main-small">
            Соус с шипами Антарианского плоскоходца
          </p>
        </div>
      </div>
    </section>
  );
}

export default BurgerIngredients;
