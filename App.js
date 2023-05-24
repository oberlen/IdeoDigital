import { StyleSheet, Text, View } from "react-native";
import Data from "./Components/data";

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
    fontSize: 50,
    fontWeight: "bold",
    margin: 40,
    padding: 40,
  },
});
