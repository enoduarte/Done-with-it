import React from "react";
import { TextInput, Platform, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const AppTextInput = ({ icon, ...others }) => (
  <View style={styles.container}>
    {icon && (
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={colors.medium}
        style={styles.icon}
      />
    )}
    <TextInput style={styles.text} {...others} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: { marginRight: 10 },
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppTextInput;
