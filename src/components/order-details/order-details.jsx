import styles from "./order-details.module.css";
import done from "../../images/done.jpg";

function OrderDetails() {
  return (
    <>
      <p className={`text text_type_digits-large ${styles.idNumber}`}>034536</p>
      <p className={`text text_type_main-medium ${styles.idTitle}`}>
        идентификатор заказа
      </p>
      <img className={styles.imgDone} src={done} />
      <p className={`text text_type_main-default ${styles.orderCooking}`}>
        Ваш заказ начали готовить
      </p>
      <p
        className={`text text_type_main-default text_color_inactive ${styles.orderWaiting}`}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}

export default OrderDetails;
