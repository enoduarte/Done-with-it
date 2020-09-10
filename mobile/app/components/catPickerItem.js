import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./appText";
import Icon from "./icon";

const CatPickerItem = ({ item, onPress }) => (
  <View style={styles.container}>
    <Icon name={item.icon} bgColor={item.bg} size={80} />
    <AppText style={styles.label}>{item.label}</AppText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
  },
  label: {
    textAlign: "center",
    marginTop: 5,
  },
});

export default CatPickerItem;
