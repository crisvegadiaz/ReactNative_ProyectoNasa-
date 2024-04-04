import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Routes from "./src/router/Routes";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7, 26, 93, 255)",
    paddingTop: 30,
    borderWidth: 1,
  },
});
