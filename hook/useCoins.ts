import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api/coins";

export const useCoins = () => {
  return useQuery({
    queryKey: ["coins"],
    queryFn: fetchCoins,
  });
};
