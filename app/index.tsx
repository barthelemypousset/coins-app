import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

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
      {/* data is the source, keyextractor for the key, renderitem use an item from data */}
      <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <CoinCard coin={item}/>}
      />
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
