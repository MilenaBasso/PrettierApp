import { TextInput, Text, View } from "react-native";
import TxtComponent from "./src/components/TxtComponent";
import { styles } from "./src/styles/StyleSheet";
import BtnComponent from "./src/components/BtnComponent";

export default function App() {
  return (
    <View style={styles.container}>
      {/* 3 textos da home */}
      <TxtComponent>
        <Text>Hiii!! This is my page.</Text>
      </TxtComponent>
      <TxtComponent>
        <Text>We can be friends if u want to, My name is Boo</Text>
      </TxtComponent>
      <TxtComponent>
        <Text>How are u doing?.</Text>
      </TxtComponent>

      <TxtComponent>
        <TextInput placeholder="What's your Name?" style={styles.inputname} />
      </TxtComponent>
      <br />

      {/* chamando a pg de botoes */}
      <BtnComponent />
    </View>
  );
}
