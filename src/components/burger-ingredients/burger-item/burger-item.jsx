import styles from "./burger-item.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function BurgerItem({ item }) {
  return (
    <div className={styles.item}>
      <Counter
        count={1}
        size="default"
        extraClass="m-1"
        className={styles.position}
      />
      <img className={styles.img} src={item.image} alt={item.name}></img>
      <div className={styles.priceBox}>
        <h3 className="text text_type_digits-default">{item.price}</h3>
        <CurrencyIcon />
      </div>
      <p className={`${styles.textCenter} text text_type_main-small`}>
        {item.name}
      </p>
    </div>
  );
}

BurgerItem.propTypes = {
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
};

export default BurgerItem;
