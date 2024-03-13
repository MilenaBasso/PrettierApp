import { Text, View, StyleSheet } from "react-native";
import { styles } from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";
import InputComponent from "../components/InputComponent";

export default function ComponentHome() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>We can be friends if u want to, My name is Boo</Text>
      <InputComponent />
    </View>
  );
}

{
  /* <Text
          style={{
            fontWeight: "bold",
            color: "red",
            fontSize: 65,
            textAlign: "center",
          }}
        >
          Welcome!!
        </Text>
         */
}
