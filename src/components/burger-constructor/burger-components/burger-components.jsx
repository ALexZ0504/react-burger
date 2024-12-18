import BurgerComponent from "./burger-component/burger-component";
import styles from "./burger-components.module.css";
import PropTypes from "prop-types";

function BurgerComponents({ data }) {
  if (!data || !Array.isArray(data)) {
    return <div>Нет данных для отображения</div>;
  }

  const bun = data.find((item) => item.type === "bun");

  const ingredients = data.filter((item) => item.type !== "bun");

  return (
    <div className={styles.container}>
      {bun && <BurgerComponent item={bun} type="top" isLocked={true} />}
      <div className={styles.scroll}>
        {ingredients.map((item) => (
          <BurgerComponent key={item._id} item={item} visible />
        ))}
      </div>
      {bun && <BurgerComponent item={bun} type="bottom" isLocked={true} />}
    </div>
  );
}

BurgerComponents.propTypes = {
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
};

export default BurgerComponents;
