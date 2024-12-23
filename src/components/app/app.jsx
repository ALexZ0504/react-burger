import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Modal from "../modal/modal";
const api = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const [data, setData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // console.log("🚀 ~ App ~ data:", data);

  async function fetchData() {
    try {
      const response = await fetch(`${api}`);
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData.data);
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data} openModal={openModal} />
        <BurgerConstructor data={data} openModal={openModal} />
        {isModalOpen && <Modal onClose={closeModal} />}
      </main>
    </div>
  );
}

export default App;
