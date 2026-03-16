// This hook handle the TanStackQuery call to fetch the data
// Save it to the queryCLient and handle the cache of the data

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api/coins";

export const useCoins = () => {
  return useInfiniteQuery({
    queryKey: ["coins"], // Trigger a refetch when key change
    queryFn: fetchCoins, // Function called when refetch happens

    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // if no data left: return undefined to indicate no more pages
      if (!lastPage || lastPage.length === 0) {
        return undefined;
      }

      return allPages.length + 1;
    },

    staleTime: 1 * 60 * 1000, // Time before data is obsolete (and refetch)
    gcTime: 5 * 60 * 1000, // Cache conservation time (default 5mn)
  });
};
