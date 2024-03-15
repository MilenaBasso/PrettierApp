import { Text } from "react-native-elements";
import { View } from "react-native-web";

export default function TxtComponent({ children }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}
