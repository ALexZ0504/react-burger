import ModalOverlay from "./modal-overlay/modal-overlay";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const modal = document.getElementById("modal");

function Modal({ onClose, children }) {
  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={styles.container}>
        <button className={styles.close} onClick={onClose}>
          <CloseIcon type="primary" />
        </button>
        {/* {children} */}
        <IngredientDetails />
      </div>
    </>,
    modal
  );
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
