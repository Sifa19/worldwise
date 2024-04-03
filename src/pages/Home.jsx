import PageNav from "../components/PageNav";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <p>
          A world map that tracks your footsteps into every cities you can think
          of. Never forget your wonderful experiences and show your friend how
          you have wandered the world.
        </p>
        <Link to="/app/cities">
          <button className="btn">START TRACKING NOW</button>
        </Link>
      </section>
    </main>
  );
}

export default Home;
