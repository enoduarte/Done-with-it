import React from "react";

import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/appText";
import colors from "../config/colors";
import ListItem from "../components/listItem";

function Details({ route }) {
  return (
    <View>
      <Image source={route.params.image} style={styles.image} />
      <View style={styles.cardDetails}>
        <AppText style={styles.title}>{route.params.title}</AppText>
        <AppText style={styles.price}>${route.params.price}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          title="Mosh Hamadani"
          desc="5 Listings"
          image={require("../assets/mosh.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardDetails: { padding: 20 },
  image: { width: "100%", height: 300 },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
    marginVertical: 10,
  },
  title: { fontSize: 24, fontWeight: "500" },
  userContainer: { marginVertical: 20 },
});

export default Details;
