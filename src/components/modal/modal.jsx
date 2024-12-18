import styles from "./modal.module.css";
import ModalOverlay from "./modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import done from "../../images/done.jpg";

function Modal() {
  return (
    <>
      <ModalOverlay />
      <div className={styles.container}>
        <CloseIcon type="primary" className={styles.close} />
        <p className={`text text_type_digits-large ${styles.idNumber}`}>
          034536
        </p>
        <p className={`text text_type_main-medium ${styles.idTitle}`}>
          идентификатор заказа
        </p>
        <img className={styles.imgDone} src={done} />
        <p className={`text text_type_main-default ${styles.orderCooking}`}>
          Ваш заказ начали готовить
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </>
  );
}

export default Modal;
