import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },

  //   estilização da pg home
  home: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    //* padding: 500,*//
  },

  // estilo do input
  inputname: {
    backgroundColor: "white",
    width: 300,
    fontSize: 15,
    marginTop: 100,
    textAlign: "center",
  },

  // estilo de todos os botoẽs
  btn: {
    justifyContent: "center",
    alignItems: "center",
  },

  //   estilo das imagens dos bntcomponent
  botimg: {
    marginTop: 46,
  },

  // estilização dos textos no app
  texts: {
    fontSize: 36,
  },
});
