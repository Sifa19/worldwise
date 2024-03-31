import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
import styles from "./Pricing.module.css";
function Pricing() {
  return (
    <main className={styles.pricing}>
      <PageNav />
      <section>
        <div>
          <h1>
            Simple Pricing. <br />
            Just $9/month.
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolor
            vero sapiente mollitia quos modi dignissimos odio ipsam aperiam
            ratione animi facere iste, dicta qui illum repudiandae. Consequatur,
            voluptate mollitia.
          </p>
          <Link to="/app">
            <button className="btn">start tracking now</button>
          </Link>
        </div>
        <img className={styles.image} src="./assets/img-2.jpg" alt="" />
      </section>
    </main>
  );
}

export default Pricing;
