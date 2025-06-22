import { Text, View, StyleSheet, ScrollView } from "react-native";
import PostImage from "./PostImage";

const LastFiveDaysImage = ({ postImages = [] }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Last 5 Days</Text>
    <ScrollView contentContainerStyle={styles.content}>
      {postImages.map((postImage) => (
        <PostImage key={postImage.title} {...postImage} />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    backgroundColor: "#1a2233",
    borderRadius: 16,
    paddingVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    color: "#ffd700",
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  content: {
    paddingHorizontal: 10,
    gap: 10,
    alignItems: "center",
  },
});

export default LastFiveDaysImage;
