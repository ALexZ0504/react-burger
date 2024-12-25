import styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";

function IngredientDetails({ item }) {
  if (!item) {
    return <div>Нет данных об ингредиенте</div>;
  }

  return (
    <>
      <h2 className={`text text_type_main-large ${styles.title}`}>
        Детали ингредиента
      </h2>
      <img className={styles.img} src={item.image_large} alt={item.name} />
      <p className={`text text_type_main-medium ${styles.text}`}>{item.name}</p>
      <div className={styles.parameters}>
        <div className={styles.parameter}>
          <p
            className={`text text_type_main-small text_color_inactive ${styles.parameterInfo}`}
          >
            Калории,ккал
          </p>
          <p
            className={`text text_type_main-small text_color_inactive ${styles.parameterInfo}`}
          >
            {item.calories}
          </p>
        </div>
        <div className={styles.parameter}>
          <p
            className={`text text_type_main-small text_color_inactive ${styles.parameterInfo}`}
          >
            Белки, г
          </p>
          <p
            className={`text text_type_main-small text_color_inactive ${styles.parameterInfo}`}
          >
            {item.proteins}
          </p>
        </div>
        <div className={styles.parameter}>
          <p
            className={`text text_type_main-small text_color_inactive ${styles.parameterInfo}`}
          >
            Жиры, г
          </p>
          <p
            className={`text text_type_main-small text_color_inactive ${styles.parameterInfo}`}
          >
            {item.fat}
          </p>
        </div>
        <div className={styles.parameter}>
          <p
            className={`text text_type_main-small text_color_inactive ${styles.parameterInfo}`}
          >
            Углеводы, г
          </p>
          <p
            className={`text text_type_main-small text_color_inactive ${styles.parameterInfo}`}
          >
            {item.carbohydrates}
          </p>
        </div>
      </div>
    </>
  );
}

export default IngredientDetails;

IngredientDetails.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
  }),
};
