import { View, Text, Image, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image
          source={require("../../assets/nasaLogo.png")}
          style={styles.img}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    flex:1,
    alignItems:"flex-start",
  },
  title: {
    fontSize:20,
    color: "#fff",
  },
  rightContainer: {
    flex:1,
    alignItems:"flex-end",
  },
  img: {
    width: 60,
    height: 60,
  },
});
export default Header;
