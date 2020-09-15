import React from "react";

import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import AppText from "./appText";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

const Card = ({ title, subTitle, image }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details")}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.cardDetails}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={1}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

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
