import { useNavigation } from "@react-navigation/native";
import { Image, Text, View, StyleSheet, Button } from "react-native";

const TodayImage = ({ date, title, url, explanation }) => {
  const { navigate } = useNavigation();

  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.img} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handleViewPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  img: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderRadius: 32,
    borderColor: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});

export default TodayImage;
