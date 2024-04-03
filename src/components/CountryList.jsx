import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

function CountryList({ isLoading, cities }) {
  if (isLoading) return <Spinner />;

  if (cities.length === 0)
    return <Message message="Add your first city by clicking on the map" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { id: city.id, flag: city.emoji, name: city.country }];
    else arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return (
          <li key={country.id}>
            <span>{country.flag} </span>
            <span>{country.name}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default CountryList;
