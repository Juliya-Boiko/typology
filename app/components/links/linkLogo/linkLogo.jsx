import styles from "./linkLogo.module.css";
import Link from "next/link";
import Icon from "../../../../public/icons/logo.svg";
import { ROUTER_KEYS } from "../../constants/routes";

export const LinkLogo = () => (
  <Link className={styles.link} href={ROUTER_KEYS.HOME.path}>
    <Icon className={styles.icon} />
  </Link>
);