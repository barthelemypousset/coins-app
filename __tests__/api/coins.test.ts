import { fetchCoinById, fetchCoins } from "../../src/api/coins";
import { apiDelta } from "../../src/api/delta";

jest.mock("../../src/api/delta", () => ({
  apiDelta: {
    get: jest.fn(),
  },
}));

describe("fetchCoins", () => {
  it("returns parsed coin data", async () => {
    const mockResponse = {
      data: {
        data: [
          { id: "1", name: "Bitcoin", symbol: "BTC" },
          { id: "2", name: "Ethereum", symbol: "ETH" },
        ],
      },
    };

    (apiDelta.get as jest.Mock).mockResolvedValue(mockResponse);

    const result = await fetchCoins({ pageParam: 1 });

    expect(result).toHaveLength(2);
    expect(result[0].name).toBe("Bitcoin");
  });
});

describe("fetchCoinById", () => {
  it("returns coin detail", async () => {
    const mockResponse = {
      data: {
        data: {
          id: "1",
          name: "Bitcoin",
          symbol: "BTC",
        },
      },
    };

    (apiDelta.get as jest.Mock).mockResolvedValue(mockResponse);

    const result = await fetchCoinById("1");

    expect(result.name).toBe("Bitcoin");
    expect(result.symbol).toBe("BTC");
  });
});
