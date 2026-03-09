import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { apiDelta } from "../api/delta";
import { useQuery } from "@tanstack/react-query";

export default function Index() {
  const fetchCoins = async () => {
    let response = await apiDelta.get("/coins");
    return response.data.data;
  };

  const useCoins = () => {
    return useQuery({
      queryKey: ["coins"],
      queryFn: fetchCoins,
    });
  };

  const { data, isLoading, error } = useCoins();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Fail</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to coin app !</Text>
      <ScrollView>
        {data.map((e: any, i: any) => {
          return (
            <Pressable key={i} onPress={() => router.push("/coinDetail")}>
              <View style={styles.coinCard}>
                <Text>ICON</Text>
                <Text>{e.name}</Text>
                <Text>{e.dirtyCode}</Text>
                <Text>{e.priceInUSD}</Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  coinCard: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#98bd6a",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
