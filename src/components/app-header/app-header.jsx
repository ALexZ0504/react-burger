import React from "react";
import styles from "./app-header.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <section className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.box}>
          <BurgerIcon />
          <a className={styles.link}>Конструктор</a>
        </div>
        <div className={styles.box_list}>
          <ListIcon type="secondary" />
          <a className={styles.link}>Лента заказов</a>
        </div>
      </nav>
      <Logo />
      <div className={styles.box_cabinet}>
        <ProfileIcon type="secondary" />
        <a className={styles.link} type="secondary">
          Личный кабинет
        </a>
      </div>
    </section>
  );
}

export default AppHeader;
