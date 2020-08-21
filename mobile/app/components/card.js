import React from "react";

import { StyleSheet, View, Image } from "react-native";

import AppText from "./appText";
import colors from "../config/colors";

const Card = ({ title, subTitle, image }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />
    <View style={styles.cardDetails}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subTitle}>{subTitle}</AppText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  cardDetails: { padding: 10 },
  image: { width: "100%", height: 200 },
  subTitle: { fontWeight: "bold", color: colors.secondary },
  title: { marginBottom: 7 },
});

export default Card;
