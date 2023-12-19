import Link from "next/link";
import styles from "./diagnostic.module.css";

export const Diagnostic = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Diagnostic</h2>
      <h3 className={styles.subTitle}>Understand your skin and its complex needs.</h3>
      <Link href="/diagnostic" className={styles.link}>Begin diagnostic test</Link>
    </section>
  );
};