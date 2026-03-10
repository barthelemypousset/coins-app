import { router } from "expo-router";
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { useCoins } from "../hook/useCoins";

export default function Index() {
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
            // we pass parameters via the router to display specific information on the next screen
            <Pressable key={i} onPress={() => router.push({ pathname: "/coinDetail", params: { name: e.name } })}>
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
