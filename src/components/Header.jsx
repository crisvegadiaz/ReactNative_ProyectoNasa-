import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Explore</Text>
    <Image
      source={require("../../assets/nasaLogo.png")}
      style={styles.logo}
      resizeMode="contain"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#10131a",
    borderBottomWidth: 1,
    borderBottomColor: "#2c3440",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 2,
    textShadowColor: "#0a0d13",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  logo: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#fff",
    padding: 2,
    borderWidth: 1,
    borderColor: "#3a4151",
  },
});

export default Header;
