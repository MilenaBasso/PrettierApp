import { TouchableOpacity } from "react-native-web";
import { View, Image, Text } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function BtnComponent() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => console.log("Actually, I don't have a login page:(")}
      >
        <Text>LOG IN</Text>
        <Image
          source={require("../assets/images/button5.png")}
          style={styles.botimg}
          
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => console.log("U can't sign in here...")}
      >
        <Text>SIGN IN</Text>
        <Image
          source={require("../assets/images/button1.png")}
          style={styles.botimg}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => console.log("Do u like cats??:D")}
      >
        <Text>IMAGE</Text>
        <Image
          source={require("../assets/images/button.png")}
          style={styles.botimg}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
}
