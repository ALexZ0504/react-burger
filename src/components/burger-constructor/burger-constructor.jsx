import styles from "./burger-constructor.module.css";
import BurgerComponents from "./burger-components/burger-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor() {
  return (
    <section className={styles.container}>
      <BurgerComponents />
      <div className={styles.order}>
        <div className={styles.priceBox}>
          <p className="text text_type_digits-medium">3333</p>
          <CurrencyIcon className={styles.size} />
        </div>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
