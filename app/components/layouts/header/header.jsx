import styles from "./header.module.css";
import { Menu } from "./menu/menu";
import { Cart } from "./cart/cart";
import { Favourite } from "./favourite/favourite";
import { Navigation } from "./navigation/navigation";
import { LinkLogo } from "../../links/linkLogo/linkLogo";

export const Header = () => (
  <header className={styles.header}>
    <Navigation />

    <Menu />

    <LinkLogo />

    <div className={styles.actions}>
      <Favourite />
      <Cart />
    </div>
  </header>
);