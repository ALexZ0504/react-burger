import BurgerComponent from "./burger-component/burger-component";
import { data } from "../../../utils/data.js";
import styles from "./burger-components.module.css";

function BurgerComponents() {
  const scrollItemIds = [5, 2, 4, 7, 8, 8];

  const validScrollItems = scrollItemIds
    .map((index) => data[index])
    .filter((item) => item !== undefined);

  return (
    <div className={styles.container}>
      <BurgerComponent productId={data[0]._id} type="top" isLocked={true} />
      <div className={styles.scroll}>
        {validScrollItems.map((item) => (
          <BurgerComponent key={item._id} productId={item._id} visible />
        ))}
      </div>
      <BurgerComponent productId={data[0]._id} type="bottom" isLocked={true} />
    </div>
  );
}

export default BurgerComponents;
