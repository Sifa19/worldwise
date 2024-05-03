import { useParams, useNavigate } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Button from "./Button";

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

function City() {
  const navigate = useNavigate();
  const { city } = useParams();
  const { getCity, currentCity } = useCities();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(
    function () {
      getCity(city);
      setIsLoading(false);
    },
    [city, getCity]
  );

  console.log(isLoading);
  return (
    <>
      {isLoading ? <Spinner /> : <div>City:{currentCity.cityName}</div>}
      <Button
        cssStyles="back"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        &larr; Back
      </Button>
    </>
  );
}

export default City;
