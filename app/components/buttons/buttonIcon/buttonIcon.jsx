import styles from "./buttonIcon.module.css";

export const ButtonIcon = ({ children, label, onClick }) => (
  <button
    type="button"
    title={label}
    className={styles.button}
    onClick={onClick}
  >
    {children}
  </button>
);