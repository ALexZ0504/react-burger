import BurgerComponent from "../burger-component/burger-component.jsx";
import { data } from "../../../utils/data.js";
import styles from "./burger-components.module.css";

function BurgerComponents() {
  return (
    <div className={styles.container}>
      <BurgerComponent productId={data[0]._id} name={data.name} />
      <BurgerComponent
        productId={data[5]._id}
        name={data.name}
        visible
        available
      />
      <BurgerComponent
        productId={data[2]._id}
        name={data.name}
        visible
        available
      />
      <BurgerComponent
        productId={data[4]._id}
        name={data.name}
        visible
        available
      />
      <BurgerComponent
        productId={data[7]._id}
        name={data.name}
        visible
        available
      />
      <BurgerComponent
        productId={data[8]._id}
        name={data.name}
        visible
        available
      />
      <BurgerComponent
        productId={data[8]._id}
        name={data.name}
        visible
        available
      />
      <BurgerComponent productId={data[0]._id} name={data.name} />
    </div>
  );
}

export default BurgerComponents;
