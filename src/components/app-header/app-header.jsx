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
          <a className={`${styles.link} text text_type_main-small`}>
            Конструктор
          </a>
        </div>
        <div className={styles.box_list}>
          <ListIcon type="secondary" />
          <a className={`${styles.link} text text_type_main-small`}>
            Лента заказов
          </a>
        </div>
      </nav>
      <Logo className={styles.logo} />
      <div className={styles.box_cabinet}>
        <ProfileIcon type="secondary" />
        <a
          className={`${styles.link} text text_type_main-small`}
          type="secondary"
        >
          Личный кабинет
        </a>
      </div>
    </section>
  );
}

export default AppHeader;
