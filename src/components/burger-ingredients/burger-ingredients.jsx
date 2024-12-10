import styles from "./burger-ingredients.module.css";
import TabList from "./tab-list/tab-list";
import BurgerItem from "./burger-item/burger-item";
import { data } from "../../utils/data";

function BurgerIngredients() {
  const buns = data.filter((item) => item.type === "bun");
  const sauces = data.filter((item) => item.type === "sauce");
  const mains = data.filter((item) => item.type === "main");

  const types = [
    { name: "Булки", items: buns },
    { name: "Соусы", items: sauces },
    { name: "Начинки", items: mains },
  ];
  return (
    <section className={styles.container}>
      <h2 className={`${styles.title} text text_type_main-large`}>
        Соберите бургер
      </h2>
      <TabList />
      <div className={styles.itemsScroll}>
        <div className={styles.items}>
          {types.map(({ name, items }) => (
            <div key={name}>
              <h3 className={`${styles.tabName} text text_type_main-medium`}>
                {name}
              </h3>
              <div className={styles.itemsGrid}>
                {items.map((item) => (
                  <BurgerItem key={item._id} productId={item._id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BurgerIngredients;
