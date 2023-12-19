"use client";
import styles from "./offer.module.css";
import { useProducts } from "../../services/hooks/useProducts";

export const Offer = ({ keys, query }) => {
  const { data, isLoading } = useProducts({ tag: query, limit: 4 });

  console.log(keys);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>{keys.title}</h2>
          <div >
            {keys.descr.map((el, idx) => {
              return <p key={idx}>{el}</p>
            })}
          </div>
        </div>
        
        <div>Gallery</div>
      </div>
    </section>
  );
};