import styles from "./burger-ingredients.module.css";
import TabList from "./tab-list/tab-list";
import BurgerItem from "./burger-item/burger-item";
import { data } from "../../utils/data";

function BurgerIngredients() {
  return (
    <section className={styles.container}>
      <h2 className={`${styles.title} text text_type_main-large`}>
        Соберите бургер
      </h2>
      <TabList />
      <div className={styles.itemsScroll}>
        <div className={styles.items}>
          <h3 className={`${styles.tabName} text text_type_main-medium`}>
            Булки
          </h3>
          <div className={styles.itemsGrid}>
            <BurgerItem productId={data[0]._id} />
            <BurgerItem productId={data[14]._id} />
          </div>

          <h3 className={`${styles.tabName} text text_type_main-medium`}>
            Соусы
          </h3>
          <div className={styles.itemsGrid}>
            <BurgerItem productId={data[3]._id} />
            <BurgerItem productId={data[6]._id} />
            <BurgerItem productId={data[5]._id} />
            <BurgerItem productId={data[9]._id} />
          </div>

          <h3 className={`${styles.tabName} text text_type_main-medium`}>
            Начинки
          </h3>
          <div className={styles.itemsGrid}>
            <BurgerItem productId={data[1]._id} />
            <BurgerItem productId={data[2]._id} />
            <BurgerItem productId={data[4]._id} />
            <BurgerItem productId={data[7]._id} />
            <BurgerItem productId={data[8]._id} />
            <BurgerItem productId={data[10]._id} />
            <BurgerItem productId={data[11]._id} />
            <BurgerItem productId={data[12]._id} />
            <BurgerItem productId={data[13]._id} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BurgerIngredients;
