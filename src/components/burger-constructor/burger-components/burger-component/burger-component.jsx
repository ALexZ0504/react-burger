import styles from "./burger-component.module.css";
import { data } from "../../../../utils/data";
import move from "../../../../images/move1.png";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function BurgerComponent({ productId, visible, type, isLocked }) {
  const product = data.find((p) => p._id === productId);
  const visibility = visible ? styles.move : styles.move_none;
  const textType = type === "top" ? "(верх)" : type === "bottom" ? "(низ)" : "";
  const allText = `${product.name} ${textType}`;
  return (
    <div className={styles.component}>
      <img className={visibility} src={move} />
      <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={allText}
        price={product.price}
        thumbnail={product.image}
      />
    </div>
  );
}

BurgerComponent.propTypes = {
  productId: PropTypes.string,
  visible: PropTypes.oneOf(["styles.move_none", "styles.move_none"]),
  type: PropTypes.string,
  isLocked: PropTypes.any,
};

export default BurgerComponent;
