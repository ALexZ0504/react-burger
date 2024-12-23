import styles from "./burger-constructor.module.css";
import BurgerComponents from "./burger-components/burger-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function BurgerConstructor({ data, openModal }) {
  if (!data || !Array.isArray(data)) {
    return <div>Загрузка...</div>;
  }

  let totalPrice = 0;

  totalPrice = data.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className={styles.container}>
      <BurgerComponents data={data} />
      <div className={styles.order}>
        <div className={styles.priceBox}>
          <p className="text text_type_digits-medium">{totalPrice}</p>
          <CurrencyIcon className={styles.size} />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={openModal}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["bun", "sauce", "main"]).isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
      __v: PropTypes.number.isRequired,
    })
  ),
  openModal: PropTypes.func.isRequired,
};

export default BurgerConstructor;
