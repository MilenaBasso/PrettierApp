import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  home: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    padding: 500,
  },

  about: {
    height: 300,
    width: 300,
    borderRadius: 300,
    resizeMode: "cover",
    source: "imagem",
  },

  inputname: {
    backgroundColor: "white",
    width: 300,
    fontSize: 20,
    marginTop: 100,
    alignItems: "center",
  },

  bgimg: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
