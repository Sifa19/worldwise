import styles from "./Button.module.css";

function Button({ children, onClick, cssStyles }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[cssStyles]}`}>
      {children}
    </button>
  );
}

export default Button;
