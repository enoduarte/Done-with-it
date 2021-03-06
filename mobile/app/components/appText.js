import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

const AppText = ({ children, style, ...rest }) => (
  <Text style={[styles.text, style]} {...rest}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
