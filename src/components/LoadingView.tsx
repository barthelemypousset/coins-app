import { View, ActivityIndicator, Text } from "react-native";

export default function LoadingView({ message = "Loading..." }) {
  return (
    <View style={{ alignItems: "center", marginTop: 40 }}>
      <ActivityIndicator size="large" />
      <Text style={{ marginTop: 10 }}>{message}</Text>
    </View>
  );
}
