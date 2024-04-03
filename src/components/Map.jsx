import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <section className={styles.mapContainer}>
      <h1>Map</h1>
      <h1>
        {lat} and {lng}
      </h1>
    </section>
  );
}

export default Map;
