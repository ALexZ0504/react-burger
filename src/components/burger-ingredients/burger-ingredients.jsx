import styles from "./burger-ingredients.module.css";
import TabList from "./tab-list/tab-list";
import BurgerItem from "./burger-item/burger-item";
import PropTypes from "prop-types";

function BurgerIngredients({ data, openModal }) {
  if (!data || !Array.isArray(data)) {
    return <div>Нет данных для отображения</div>;
  }

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
                  <BurgerItem
                    key={item._id}
                    item={item}
                    openModal={openModal}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["bun", "sauce", "main"]).isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
      __v: PropTypes.number.isRequired,
    })
  ),
  openModal: PropTypes.func.isRequired,
};

export default BurgerIngredients;
