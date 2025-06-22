import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet } from "react-native";

const PostImage = ({ title, date, url, explanation }) => {
  const navigation = useNavigation();

  const handleViewPress = () => {
    navigation.navigate("Detail", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="View" onPress={handleViewPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1a237e",
    borderRadius: 24,
    marginBottom: 16,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  date: {
    color: "#b0bec5",
    fontSize: 15,
    marginBottom: 16,
    fontStyle: "italic",
  },
  buttonContainer: {
    // marginTop: 12,
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

export default PostImage;
