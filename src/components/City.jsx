import { useParams } from "react-router-dom";

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

function City() {
  const { city } = useParams();

  return <div>City:{city}</div>;
}

export default City;
