import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import fetchApi from "../utils/fetch";
import { format, sub } from "date-fns";
import Header from "../components/Header";
import TodayImage from "../components/TodaysImage";
import LastFiveDaysImage from "../components/LastFiveDaysImage";

const Home = () => {
  const [todaysImage, setTodaysImage] = useState(null);
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState([]);

  useEffect(() => {
    const fetchTodaysImage = async () => {
      try {
        const data = await fetchApi();
        setTodaysImage(data);
      } catch {
        setTodaysImage(null);
      }
    };

    const fetchLastFiveDaysImages = async () => {
      try {
        const today = new Date();
        const endDate = format(today, "yyyy-MM-dd");
        const startDate = format(sub(today, { days: 5 }), "yyyy-MM-dd");
        const data = await fetchApi(`&start_date=${startDate}&end_date=${endDate}`);
        setLastFiveDaysImages(data);
      } catch (error) {
        setLastFiveDaysImages([]);
        console.error(error);
      }
    };

    fetchTodaysImage();
    fetchLastFiveDaysImages();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodayImage {...(todaysImage || {})} />
      <LastFiveDaysImage postImages={lastFiveDaysImages} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)",
  },
});

export default Home;
