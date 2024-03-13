import { TextInput, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function InputComponent() {
  return (
    <View style={styles.inputname}>
      <TextInput placeholder="What's your Name?" />
    </View>
  );
}