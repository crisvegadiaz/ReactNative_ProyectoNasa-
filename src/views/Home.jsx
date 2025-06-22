import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import fetchApi from "../utils/fetch";
import { format, sub } from "date-fns";
import Header from "../components/Header";
import TodayImage from "../components/TodaysImage";
import LastFiveDaysImage from "../components/LastFiveDaysImage";

function Home() {
  const [todaysImage, setTodaysImage] = useState({});
  const [lastFiveDaysImage, setLastFiveDaysImage] = useState([]);

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        setTodaysImage(undefined);
      }
    };

    const loadLast5DaysImage = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");

        const lastFiveDaysImageResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
        );

        setLastFiveDaysImage(lastFiveDaysImageResponse);
      } catch (error) {
        console.error(error);
      }
    };

    loadTodaysImage().catch(null);
    loadLast5DaysImage().catch(null);
  }, []);

  // console.log(lastFiveDaysImage);

  return (
    <View style={styles.container}>
      <Header />
      <TodayImage {...todaysImage} />
      <LastFiveDaysImage postImages={lastFiveDaysImage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)",
  },
});

export default Home;
