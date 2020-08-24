import React from "react";
import { TouchableOpacity } from "react-native";
import AppText from "./appText";

const PickerItem = ({ label, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <AppText style={{ padding: 20 }}>{label}</AppText>
  </TouchableOpacity>
);

export default PickerItem;
