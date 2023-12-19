import styles from "./hero.module.css";

export const Hero = ({ title, primary, bgiUrl, bgColor }) => (
  <section
    style={{
      backgroundImage: `url(${bgiUrl.src})`,
      backgroundColor: `${bgColor}`
    }}
    className={`${styles.section} ${primary ? styles.sectionPrimary : styles.sectionSecondary}`}
  >
    <h2
      style={{
        WebkitTextStrokeColor: `${bgColor}`
      }}
      className={styles.title}
    >
      {title}
    </h2>
  </section>
);