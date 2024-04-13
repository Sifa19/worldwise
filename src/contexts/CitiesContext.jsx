import { createContext, useContext, useEffect, useState } from "react";
const CitiesContext = createContext();
const BASE_URL = "http://localhost:8000/";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function getCitiesData() {
      try {
        const res = await fetch(BASE_URL + "cities");
        const data = await res.json();
        console.log(data);
        setCities(data);
      } catch (err) {
        console.log("this" + err);
      } finally {
        setIsLoading(false);
      }
    }

    getCitiesData({ children });
  }, []);

  async function getCity(id) {
    try {
      const res = await fetch(`${BASE_URL}cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      console.log("this" + err);
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    try {
      const res = await fetch(`${BASE_URL}cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      setCities((s) => [...s, data]);
    } catch (err) {
      console.log("this" + err);
    }
  }

  async function deleteCity(id) {
    try {
      await fetch(`${BASE_URL}cities/${id}`, {
        method: "DELETE",
      });

      setCities((cities) => cities.filter((city) => id !== city.id));
    } catch (err) {
      console.log("this" + err);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        setIsLoading,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const cities = useContext(CitiesContext);
  if (cities === undefined)
    throw new Error("Using Citirs context outside cities provider");
  return cities;
}

export { CitiesProvider, useCities };
