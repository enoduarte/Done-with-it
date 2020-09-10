import React from "react";
import { TouchableOpacity } from "react-native";
import AppText from "./appText";

const PickerItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <AppText style={{ padding: 20 }}>{item.label}</AppText>
  </TouchableOpacity>
);

export default PickerItem;
