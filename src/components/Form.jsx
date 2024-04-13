// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useUrlPosition from "../hooks/useUrlPosition";
import styles from "./Form.module.css";
import Button from "./Button";
import Massage from "./Message";
import Spinner from "./Spinner";
import { useCities } from "../contexts/CitiesContext";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  console.log(codePoints);
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const navigate = useNavigate();
  const { lat, lng } = useUrlPosition();
  const { createCity, isLoading: citiesLoading } = useCities();
  const [isLoading, setIsLoading] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState();
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");

  const [emoji, setEmoji] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!cityName && !date) return;
    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };

    await createCity(newCity);
    navigate("/app");
  }

  useEffect(
    function () {
      if (!lat && !lng) return;
      async function fetchCityData() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          if (!data.countryCode)
            throw new Error(
              "This donst seem to be a city. Click Somewhere else 😊"
            );
          setCityName(data.city || data.locality || "");
          setCountry(data.countryName || "");
          setEmoji(convertToEmoji(data.countryCode));
          setIsLoading(false);
        } catch (err) {
          setError(err.message);
          setIsLoading(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  if (isLoading) return <Spinner />;

  if (error) return <Massage message={error} />;

  if (!lat && !lng)
    return <Massage message={"Start by clicking somewhere on the map"} />;

  return (
    <form
      className={`${styles.form} ${isLoading ? styles.loading : ""}`}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>
      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
        <DatePicker selected={date} onChange={(d) => setDate(d)} />
      </div>
      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>
      <div className={styles.buttons}>
        <Button cssStyles="primary">Add</Button>
        <Button
          cssStyles="back"
          onClick={(e) => {
            e.preventDefault();
            navigate("/app/cities");
          }}
        >
          &larr; Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
