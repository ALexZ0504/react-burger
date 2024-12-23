import styles from "./burger-component.module.css";
import move from "../../../../images/move1.png";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function BurgerComponent({ item, visible, type, isLocked }) {
  if (!item) {
    return <div>Нет данных ингредиента</div>;
  }

  const visibility = visible ? styles.move : styles.move_none;
  const textType = type === "top" ? "(верх)" : type === "bottom" ? "(низ)" : "";
  const allText = `${item.name} ${textType}`;

  return (
    <div className={styles.component}>
      <img className={visibility} src={move} alt="Иконка перемещения" />
      <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={allText}
        price={item.price}
        thumbnail={item.image}
      />
    </div>
  );
}

BurgerComponent.propTypes = {
  item: PropTypes.shape({
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
  }),
  visible: PropTypes.bool,
  type: PropTypes.string,
  isLocked: PropTypes.any,
};

export default BurgerComponent;
