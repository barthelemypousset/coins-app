import { apiDelta } from "./delta";

export async function fetchCoins({ pageParam = 1 }) {
  let response = await apiDelta.get("/coins", {
    // using Axios params to send URL parameters
    params: {
      "page[number]": pageParam,
      "page[size]": 30,
    },
  });
  return response.data.data;
}

export const fetchCoinById = async (id: string) => {
  const response = await apiDelta.get(`/coins/${id}`);
  return response.data.data;
};
