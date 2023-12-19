"use client";
import styles from "./recommend.module.css";
import Image from "next/image";
import Link from "next/link";
import { useProducts } from "../../services/hooks/useProducts";
import { LinkPrimary } from "../../links/linkPrimary/linkPrimary";
import { ROUTER_KEYS } from "../../constants/routes";

export const Recommend = ({ keys, query, navigate }) => {
  const { data, isLoading } = useProducts({ tag: query, limit: 4 });

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{keys.title}</h2>
        <div className={styles.list}>
          {data && data.map(({ _id, name, price, imgUrl }) => {
            return <article key={_id} className={styles.item}>
              <div className={styles.imageContainer}>
                <Image
                  src={imgUrl}
                  alt={name}
                  width={0}
                  height={0}
                  className={styles.image}
                />
              </div>
              <div className={styles.descr}>
                {name} - {price}€
                <Link
                  href={`${ROUTER_KEYS.PRODUCT.path}/${_id}`}
                  className={styles.overlay}
                >
                  View
                </Link>
              </div>
            </article>
          })}
        </div>
        <LinkPrimary path={navigate} />
      </div>
    </section>
  );
};