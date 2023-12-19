"use client";
import { useProducts } from "../../services/hooks/useProducts";

export const Bestsellers = () => {
  const { data, isLoading} = useProducts({ tag: "bestsellers", limit: 5 });

  // console.log({ data, isLoading });

  return (
    <section>Bestsellers</section>
  );
};