import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from "expo-router";

export default function coinDetail() {
  // Get parameters from expo-router and thus, display coin detail from where the press happend
  const { name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>detail screen</Text>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
