import { apiDelta } from "./delta";

export const fetchCoins = async () => {
    let response = await apiDelta.get("/coins");
    
    return response.data.data;
  };
