import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
function Login() {
  return (
    <main className={styles.login}>
      <PageNav />
      <section>
        <div>
          <label>Email address</label>
          <br />
          <input type="" name="" id="" />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input type="" name="" id="" />
        </div>
        <Link to="/app">
          <button className="btn">Login</button>
        </Link>
      </section>
    </main>
  );
}

export default Login;
