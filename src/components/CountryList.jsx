import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { isLoading, cities } = useCities();
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
