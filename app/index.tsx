import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";

import { useCoins } from "../hook/useCoins";
import CoinCard from "../components/coinCard";

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
      <ScrollView>
        {data.map((e: any, i: any) => {
          return (
            // we pass parameters via the router to display specific information on the next screen
            <CoinCard key={i} coin={e} />
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
