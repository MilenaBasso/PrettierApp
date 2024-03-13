import { TouchableOpacity } from "react-native-web";
import { View, Image, Text } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function BtnComponent() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text>LOG IN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Text>SIGN IN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Text>IMAGE</Text>
      </TouchableOpacity>
      <Image>

      </Image>
    </View>
  );
}

// onPress={() => console.log("You pressed the button.")}
