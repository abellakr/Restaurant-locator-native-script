import React from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";

const foods = [
  {
    title: "Lasagna",
    description: "With Butter Lettuce, Tomato and sauce Bechamel",
    price: "$13.50",
    image:
      "https://www.simplyrecipes.com/thmb/Hm1DTQDZ9Dhkl7zTUkD6idFKmT8=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__11__Vegetarian-Lasagna-LEAD-1-6173a71bfd1347aa8d7659150e87b8f4.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with Tenderloin Chicken",
    price: "$19.20",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-tandori-1526595014.jpg",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles with cheese and sauce. A delicious mexican dish",
    price: "$14.50",
    image:
      "https://www.simplyrecipes.com/thmb/RPxc7ZM0TyEztssOZJay1mtlvCs=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chilaquiles-LEAD-2-4c72e13d2f924120a7f673ff4b4b1283.jpg",
  },
  {
    title: "Chickean Caesar Salad",
    description: "One can never go wrong with a classic Chicken Caesar Salad",
    price: "$21.50",
    image:
      "https://www.afamilyfeast.com/wp-content/uploads/2012/12/Caesar-Salad-with-Grilled-Caesar-Chicken-1.jpg",
  },
  {
    title: "Lasagna",
    description: "With Butter Lettuce, Tomato and sauce Bechamel",
    price: "$13.50",
    image:
      "https://www.simplyrecipes.com/thmb/Hm1DTQDZ9Dhkl7zTUkD6idFKmT8=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__11__Vegetarian-Lasagna-LEAD-1-6173a71bfd1347aa8d7659150e87b8f4.jpg",
  },
];

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItem}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = ({ food }) => {
  return (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
      <Text style={styles.title}>{food.title}</Text>
      <Text>{food.description}</Text>
      <Text>{food.price}</Text>
    </View>
  );
};

const FoodImage = ({ food }) => {
  return (
    <View>
      <Image
        source={{ uri: food.image }}
        style={{ width: 100, height: 100, borderRadius: 8 }}
      />
    </View>
  );
};
