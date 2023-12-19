"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/query";
import { getAllProducts } from "../utils/axios";

export const useProducts = ({ tag, limit }) => {
  const data = useQuery({
    queryKey: [tag],
    queryFn: async () => await getAllProducts({ tag, limit }),
  });

  return data;
};