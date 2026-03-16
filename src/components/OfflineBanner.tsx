import { View, Text } from "react-native";

export default function OfflineBanner() {
  return (
    <View
      style={{
        backgroundColor: "#ffcc00",
        padding: 8,
        alignItems: "center",
      }}>
      <Text>You are offline. Showing cached data.</Text>
    </View>
  );
}
