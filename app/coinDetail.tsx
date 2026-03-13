import { View, Text, ActivityIndicator, Button, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

import { useCoinDetail } from "../hook/useCoinDetail";

export default function CoinDetailScreen() {
  // Get parameters from expo-router and thus, display coin detail from where the press happend
  const { id } = useLocalSearchParams<{ id: string }>();

  // useQuery returns initial data + states
  const { data, isLoading, isError, refetch } = useCoinDetail(id);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const handleRefresh = async () => {
    await refetch();
    setLastUpdated(new Date());
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return (
      <View>
        <Text>Failed to load coin data</Text>
        <Button title="Retry" onPress={handleRefresh} />
      </View>
    );
  }

  return (
    <View style={{ padding: 16 }}>
      <Image source={{ uri: `https://delta.app/images/${id}/icon-64.png` }} style={{ width: 64, height: 64 }} />

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 24, paddingRight: 10 }}>{data.name}</Text>
        <Text>{data.dirtyCode}</Text>
      </View>

      <Text>Price: {data.priceInUSD}</Text>
      <Text>Change in 24h: {data.percentChange24h.toFixed(2)}</Text>

      <Text>Market Cap: {data.marketCapInUSD}</Text>

      <Button title="Refresh data" onPress={handleRefresh} />

      {lastUpdated && <Text style={{ marginTop: 10 }}>Last updated: {lastUpdated.toLocaleTimeString()}</Text>}
    </View>
  );
}
