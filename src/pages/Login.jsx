import { Link, useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useAuthentication } from "../contexts/AuthenticationContext";
import { useEffect, useState } from "react";
function Login() {
  const { login, isAuthenticated } = useAuthentication();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");
  useEffect(
    function () {
      if (isAuthenticated === true) {
        navigate("/app");
      }
    },
    [login]
  );
  return (
    <main className={styles.login}>
      <PageNav />
      <section>
        <div>
          <label>Email address</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(() => e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(() => e.target.value)}
          />
        </div>
        <Link to="/app">
          <button className="btn" onClick={() => login(email, password)}>
            Login
          </button>
        </Link>
      </section>
    </main>
  );
}

export default Login;
