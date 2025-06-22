import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View, StyleSheet, Button } from "react-native";

const TodayImage = ({ date, title, url, explanation }) => {
  const navigation = useNavigation();

  const handleViewPress = () => {
    navigation.navigate("Detail", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.img} resizeMode="cover" />
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handleViewPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#23336a",
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 28,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
    borderWidth: 1,
    borderColor: "#3e54a3",
  },
  img: {
    width: "100%",
    height: 210,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#a3b8ff",
    marginBottom: 14,
    backgroundColor: "#1a2540",
  },
  title: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 8,
    fontWeight: "bold",
    letterSpacing: 0.5,
    textShadowColor: "#1a2540",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  date: {
    color: "#b3c6ff",
    fontSize: 15,
    marginBottom: 10,
    fontStyle: "italic",
  },
  buttonContainer: {
    marginTop: 12,
    backgroundColor: "#3e54a3",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
});

export default TodayImage;
