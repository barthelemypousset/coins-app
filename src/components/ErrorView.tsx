import { View, Text, Button } from "react-native";

interface Props {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorView({ message = "Something went wrong", onRetry }: Props) {
  return (
    <View style={{ alignItems: "center", marginTop: 40 }}>
      <Text>{message}</Text>

      {onRetry && <Button title="Retry" onPress={onRetry} />}
    </View>
  );
}
