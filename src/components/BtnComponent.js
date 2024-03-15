import { TouchableOpacity } from "react-native-web";
import { View, Image, Text } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function BtnComponent() {
  return (
    <View style={styles.container}>
      {/* botão de login */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => alert("Actually, I don't have a login page:(")}
      >
        <Text>LOG IN</Text>
        <Image
          source={require("../assets/images/button5.png")}
          style={styles.botimg}
        />
      </TouchableOpacity>

      {/* botão de cadastrar */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => alert("U can't sign in here...")}
      >
        <Text>SIGN IN</Text>
        <Image
          source={require("../assets/images/button1.png")}
          style={styles.botimg}
          resizeMode="cover"
        />
      </TouchableOpacity>

      {/* botão de imagem */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => alert("Do u like cats??:D")}
      >
        <Image
          source={require("../assets/images/button.png")}
          style={styles.botimg}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
}
