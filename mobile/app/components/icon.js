import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ name, size = 40, bgColor = "#000", iColor = "#fff" }) => (
  <View
    style={{
      backgroundColor: bgColor,
      height: size,
      width: size,
      borderRadius: size / 2,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <MaterialCommunityIcons size={size * 0.5} name={name} color={iColor} />
  </View>
);

export default Icon;
