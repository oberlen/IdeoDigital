import { StyleSheet, Text, View } from "react-native";
import Data from "./data";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Data from Google Sheet</Text>
      <Data />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "top",
    fontSize:30,
    fontWeight: "bold",
    marginTop:40

  },
});