import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function CoinCard({ coin }: any) {
  return (
    // we pass parameters via the router to display specific information on the next screen
    <Pressable onPress={() => router.push({ pathname: "/coinDetail", params: { name: coin.name } })}>
      <View style={styles.coinCard}>
        <Text>ICON</Text>
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
    flexDirection: "row",
    backgroundColor: "#98bd6a",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
