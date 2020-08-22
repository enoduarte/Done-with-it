import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./appText";

const AppPicker = ({ icon, placeholder, ...others }) => (
  <View style={styles.container}>
    {icon && (
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={colors.medium}
        style={styles.icon}
      />
    )}
    <AppText style={styles.text}>{placeholder}</AppText>
    <MaterialCommunityIcons
      name="chevron-down"
      size={20}
      color={colors.medium}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 5,
  },
  icon: { marginRight: 10 },
  text: {
    flex: 1,
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppPicker;
