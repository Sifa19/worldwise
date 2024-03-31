import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <div>
      <NavLink to="/">
        <img className={styles.logo} src="./assets/logo.png" alt="logo" />
      </NavLink>
    </div>
  );
}

export default Logo;
