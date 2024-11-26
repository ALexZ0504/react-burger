import styles from "./burger-item.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../../utils/data";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerItem({ productId }) {
  const product = data.find((p) => p._id === productId);
  return (
    <div className={styles.item}>
      <Counter
        count={1}
        size="default"
        extraClass="m-1"
        className={styles.position}
      />
      <img className={styles.img} src={product.image}></img>
      <div className={styles.priceBox}>
        <h3 className="text text_type_digits-default">{product.price}</h3>
        <CurrencyIcon />
      </div>
      <p className={`${styles.textCenter} text text_type_main-small`}>
        {product.name}
      </p>
    </div>
  );
}

export default BurgerItem;
