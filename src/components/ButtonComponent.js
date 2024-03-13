import { View, Button, Pressable } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function ButtonLogin() {
  return (
    <View style={styles.container}>
      <Pressable
      style={style.button}
        onPress={() => console.log("That's All.")}
      >
        <Text>Press Here</Text>
      </Pressable>
    </View>
  );
}