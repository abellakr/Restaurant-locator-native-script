import React from "react";
import { Image, View, Text } from "react-native";

const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image:
    "https://www.thebalancesmb.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg",
  price: "$$",
  reviews: "1500",
  rating: 4.5,
  categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating}⭐ (${reviews}+)`;
  return (
    <View style={{ alignItems: "center" }}>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = ({ image }) => {
  return (
    <Image
      source={{ uri: image }}
      style={{
        width: "100%",
        height: 180,
        // borderRadius: 20,
      }}
    />
  );
};

const RestaurantName = ({ name }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 29,
          fontWeight: "600",
          marginTop: 10,
          marginHorizontal: 15,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const RestaurantDescription = ({ description }) => {
  return (
    <View>
      <Text
        style={{
          marginTop: 10,
          marginHorizontal: 15,
          fontWeight: "400",
          fontSize: 15.5,
        }}
      >
        {description}
      </Text>
    </View>
  );
};
