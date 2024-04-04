import { useRoute } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Header from "../../components/Header/Header";

function Detail() {
  const {
    params: { title, date, url, explanation },
  } = useRoute();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{ uri: url }} style={styles.img} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)",
  },
  content: {
    backgroundColor: "#2c449d",
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
    flex: 1,
  },
  img: {
    width: "100%",
    height: "50%",
    borderColor: "#fff",
    borderRadius: 32,
    borderWidth: 2,
    marginBottom: 16,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  explanationContainer: {
    marginVertical: 16,
  },
  explanation: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Detail;
