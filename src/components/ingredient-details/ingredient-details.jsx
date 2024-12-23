import styles from "./ingredient-details.module.css";

function IngredientDetails() {
  return (
    <>
      <h2 className={`text text_type_main-large ${styles.title}`}>
        Детали ингридиента
      </h2>
      <img className={styles.img} />
      <p className={`text text_type_main-medium ${styles.text}`}>
        Пока просто текст
      </p>
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
            244,4
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
            12,2
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
            17,4
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
            10,2
          </p>
        </div>
      </div>
    </>
  );
}

export default IngredientDetails;
