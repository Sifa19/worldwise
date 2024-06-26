import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { id, cityName, emoji, date, position } = { ...city };

  function handleDelete(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <Link
      className={`${styles.cityItem} ${
        currentCity.id === id ? styles["cityItem--selected"] : ""
      }`}
      to={`${id}?lat=${position.lat}&lng=${position.lng}`}
    >
      <span className={styles.emoji}>{emoji}</span>
      <flag-emoji code="us"></flag-emoji>
      <h5 className={styles.name}>{cityName}</h5>
      <time className={styles.date}>({formatDate(date)})</time>
      <button className={styles.deleteBtn} onClick={(e) => handleDelete(e)}>
        &times;
      </button>
    </Link>
  );
}

export default CityItem;
