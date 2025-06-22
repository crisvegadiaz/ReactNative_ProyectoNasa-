import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Routes from "./src/router/Routes";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#071A5D", 
    paddingTop: 30,
    borderWidth: 1,
    borderColor: "transparent",
  },
});
