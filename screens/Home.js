import React, { useEffect, useState } from "react";
import { ScrollView, SafeAreaView, View, Text, StyleSheet } from "react-native";
import HeaderTab from "../components/home/HeaderTab";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";

const YELP_API_KEY =
  "YAfqaKBsubQC8NYzLngrZ69yC0YuewEUmTR_BSKZp8X2LW47otLzngSZ9IxVSchYSzivw0Nt16nzu0SPfj8I1UoaGcTg1lXj8HNAW0k30jBmOc57tnWDh-ZgpFDCYXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showVerticalIndicator={false}>
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  view: {
    backgroundColor: "white",
    padding: 15,
  },
});
