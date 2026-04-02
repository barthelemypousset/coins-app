import { View, Text,StyleSheet, Image, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

import { useCoinDetail } from "../hook/useCoinDetail";
import { useNetworkStatus } from "../hook/useNetworkStatus";

import OfflineBanner from "../components/OfflineBanner";
import LoadingView from "../components/LoadingView";
import ErrorView from "../components/ErrorView";
import { fetchImage } from "../api/coins";

export default function CoinDetailScreen() {
  // Get parameters from expo-router and thus, display coin detail from where the press happend
  const { id } = useLocalSearchParams<{ id: string }>();

  // useQuery returns initial data + states
  const { data, isLoading, isError, refetch } = useCoinDetail(id);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const { isOffline } = useNetworkStatus();

  const handleRefresh = async () => {
    await refetch();
    setLastUpdated(new Date());
  };

  if (isLoading) {
    return <LoadingView message="Loading coin detail..." />;
  }

  if (isError) {
    return <ErrorView message="Failed to load coin details" onRetry={refetch} />;
  }

  return (
    <View style={{ padding: 16, backgroundColor: "#98bd6a", borderRadius: 10, margin: 20 }}>
      {isOffline && <OfflineBanner />}

      <Image source={{ uri: fetchImage(id) }} style={{ width: 64, height: 64 }} />
      
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 24, paddingRight: 10 }}>{data.name}</Text>
        <Text>{data.dirtyCode}</Text>
      </View>

      <Text>Price: {data.priceInUSD}</Text>
      <Text>Change in 24h: {data.percentChange24h?.toFixed(2)}</Text>

      <Text>Market Cap: {data.marketCapInUSD}</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && { opacity: 0.7, backgroundColor: "#b6d36b" }, // Example effect
        ]}
        onPress={handleRefresh}>
        <Text>Refresh</Text>
      </Pressable>

      {lastUpdated && <Text style={{ marginTop: 10 }}>Last updated: {lastUpdated.toLocaleTimeString()}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#d4e989",
    width: "50%",
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
});
