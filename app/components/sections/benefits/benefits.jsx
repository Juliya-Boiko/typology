import styles from "./benefits.module.css";

export const Benefits = () => (
  <section className={styles.section}>
    <div className={styles.wrapper}>
      <p><span className={styles.accent}>Our products are</span> Vegan, Cruelty-free,</p>
      <p>Made in France</p>
    </div>
  </section>
);