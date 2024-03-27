import { useQuery } from "react-query";
import { returnApi } from "@/services/api";

export const useTodos = () => {
  return useQuery(["todoQuery"], () => returnApi(), {
    refetchOnWindowFocus: false,
    retry: 1, // Tenta a consulta uma vez
  });
};
