import BurgerComponent from "../burger-component/burger-component.jsx";
import { data } from "../../../utils/data.js";
import styles from "./burger-components.module.css";

function BurgerComponents() {
  return (
    <div className={styles.container}>
      <BurgerComponent productId={data[0]._id} />
      <div className={styles.scroll}>
        <BurgerComponent productId={data[5]._id} visible available />
        <BurgerComponent productId={data[2]._id} visible available />
        <BurgerComponent productId={data[4]._id} visible available />
        <BurgerComponent productId={data[7]._id} visible available />
        <BurgerComponent productId={data[8]._id} visible available />
        <BurgerComponent productId={data[8]._id} visible available />
      </div>

      <BurgerComponent productId={data[0]._id} />
    </div>
  );
}

export default BurgerComponents;
