import ModalOverlay from "./modal-overlay/modal-overlay";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

const modal = document.getElementById("modal");

function Modal({ onClose, modalContent, selectedIngredient }) {
  let content;

  if (modalContent === "ingredient") {
    content = <IngredientDetails item={selectedIngredient} />;
  } else if (modalContent === "order") {
    content = <OrderDetails />;
  } else {
    content = null;
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={styles.container}>
        <CloseIcon type="primary" className={styles.close} onClick={onClose} />
        {content}
      </div>
    </>,
    modal
  );
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  modalContent: PropTypes.string,
};
