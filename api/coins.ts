//todo:
// add image function here
// better folder arrangement
import { apiDelta } from "./delta";

export async function fetchCoins({pageParam = 1}) {
  let response = await apiDelta.get("/coins", {
      // using Axios params to send URL parameters
      params: {
        "page[number]": pageParam,
        "page[size]": 30,
      },
    });
    console.log("api/coins: fetch page", pageParam)
    return response.data.data;
  };
  