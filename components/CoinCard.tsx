import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { router } from "expo-router";

import { Coin } from "../types/coins";

type CoinCardProps = { coin: Coin };

export default function CoinCard({ coin }: CoinCardProps) {
  // Icon of the coin
  const iconUrl = `https://delta.app/images/${coin.id}/icon-64.png`;

  return (
    // we pass parameters via the router to display specific information on the next screen
    <Pressable onPress={() => router.push({ pathname: "/coinDetail", params: { id: coin.id } })}>
      <View style={styles.coinCard}>
        <Image source={{ uri: iconUrl }} style={styles.icon} />

        <Text>{coin.name}</Text>
        <Text>{coin.dirtyCode}</Text>
        <Text>{coin.priceInUSD}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  coinCard: {
    flex: 1,
    width: "90%", // Take full width of parent
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#98bd6a",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
