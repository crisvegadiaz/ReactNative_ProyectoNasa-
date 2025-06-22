import React from "react";
import { useRoute } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Header from "../components/Header";

const Detail = () => {
  const route = useRoute();
  const { title, date, url, explanation } = route.params || {};

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {url ? (
          <Image source={{ uri: url }} style={styles.img} resizeMode="cover" />
        ) : null}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: "#0a174e",
  },
  content: {
    flex: 1,
    backgroundColor: "#23367a",
    borderRadius: 32,
    marginVertical: 28,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  img: {
    width: "100%",
    height: 240,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#a5baff",
    marginBottom: 20,
    backgroundColor: "#1a2a6c",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    letterSpacing: 1,
    textShadowColor: "#1a2a6c",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  date: {
    color: "#b0c7ff",
    fontSize: 17,
    marginBottom: 14,
    textAlign: "center",
    fontStyle: "italic",
  },
  explanationContainer: {
    flex: 1,
    marginVertical: 10,
    backgroundColor: "#1a255a",
    borderRadius: 18,
    padding: 12,
  },
  explanation: {
    color: "#e6eaff",
    fontSize: 17,
    lineHeight: 24,
    textAlign: "justify",
    letterSpacing: 0.2,
  },
});

export default Detail;
