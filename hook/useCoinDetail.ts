import { useQuery } from "@tanstack/react-query";
import { fetchCoinById } from "../api/coins";

export const useCoinDetail = (id: string) => {
  return useQuery({
    queryKey: ["coins", id],
    queryFn: () => fetchCoinById(id),
    // Query will run only if true (if id exist)
    enabled: Boolean(id),
    staleTime: 1 * 60 * 1000,
  });
};
