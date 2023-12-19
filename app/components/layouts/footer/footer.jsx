import styles from "./footer.module.css";
import Box from "../../../../public/icons/box.svg";
import Gift from "../../../../public/icons/gift.svg";
import Insta from "../../../../public/icons/instagram.svg";
import { SubscribeForm } from "../../forms/subscribe/subscribeForm";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerTop}>
      <p>We investigate the right ingredients for each skin typology. </p>
      <p>Our formulations are concise, concentrated, and made in France.</p>
    </div>

    <div className={styles.wrapper}>
      <nav className={styles.navigation}>Navigation</nav>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.footerIcon}><Box /></span>
          <span>Free shipping starts at 50€</span>
        </li>
        <li className={styles.item}>
          <span className={styles.footerIcon}><Gift /></span>
          <span>Complimentary gift starts at 75€</span>
        </li>
        <li className={styles.item}>
          <span className={styles.footerIcon}><Box /></span>
          <span>Shipped from France</span>
        </li>
      </ul>

      <SubscribeForm />
    </div>

    <div className={styles.footerBottom}>
      <p className={styles.footerBottomText}>Typology products are free from Parabens, Phenoxyethanol, Paraffin Oil and Sulphates.</p>
      <a className={styles.footerBottomLink}>Follow Typology on <Insta width="18" height="18" /></a>
    </div>
  </footer>
);