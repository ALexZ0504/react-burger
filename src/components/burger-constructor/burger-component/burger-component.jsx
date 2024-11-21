import styles from "./burger-component.module.css";
import { data } from "../../../utils/data";
import move from "../../../images/move.png";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { DeleteIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { LockIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerComponent({ productId, visible, available }) {
  const product = data.find((p) => p._id === productId);
  const visibility = visible ? styles.move : styles.move_none;
  const ability = available ? (
    <DeleteIcon type="primary" />
  ) : (
    <LockIcon type="secondary" />
  );
  return (
    <div className={styles.component}>
      <img className={visibility} src={move} />
      <div className={styles.box}>
        <img className={styles.img} src={product.image} alt={product.name} />
        <h2 className={styles.name}>{product.name}</h2>
        <div className={styles.priceBox}>
          <p className="text text_type_digits-default">{product.price}</p>
          <CurrencyIcon />
        </div>
        {ability}
      </div>
    </div>
  );
}
export default BurgerComponent;
