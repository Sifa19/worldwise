import Logo from "../components/Logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of Cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </section>
  );
}

export default Sidebar;
