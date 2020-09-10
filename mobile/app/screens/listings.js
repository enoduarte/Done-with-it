import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Card from "../components/card";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 99,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in good codition, very good couch for your family",
    price: 815,
    image: require("../assets/couch.jpg"),
  },
];

function Listings() {
  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={listings}
        keyExtractor={(i) => i.id + ""}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$ " + item.price}
            image={item.image}
          />
        )}
      />
    </View>
  );
}

export default Listings;
