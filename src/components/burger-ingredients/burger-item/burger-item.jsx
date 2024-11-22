import styles from "./burger-item.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../../utils/data";

function BurgerItem({ productId }) {
  const product = data.find((p) => p._id === productId);
  return (
    <div className={styles.item}>
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
