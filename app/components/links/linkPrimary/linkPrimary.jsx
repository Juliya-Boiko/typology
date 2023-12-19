import styles from "./linkPrimary.module.css";
import Link from "next/link";
import Arrow from "../../../../public/icons/arrow.svg";

export const LinkPrimary = ({ label = "View all", path }) => (
  <Link href={path} className={styles.link}>
    <Arrow className={styles.icon} />
    {label}
  </Link>
);