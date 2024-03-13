import { StyleSheet, Text, View } from "react-native";
import TxtComponent from "./src/components/TxtComponent";
import InputComponent from "./src/components/InputComponent";
import { styles } from "./src/styles/StyleSheet";

export default function App() {
  return (
    <View style={styles.container}>
      <TxtComponent>
        <Text>Hiii!! This is my page.</Text>
      </TxtComponent>
      <TxtComponent>
        <Text>We can be friends if u want to, My name is Boo</Text>
      </TxtComponent>
      <TxtComponent>
        <Text>Hiii!! This is my page.</Text>
      </TxtComponent>

      <InputComponent />
    </View>
  );
}
