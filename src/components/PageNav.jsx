import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.logo}>
            <Logo />
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <button className={`btn ${styles.btn}`}>LOGIN</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageNav;
