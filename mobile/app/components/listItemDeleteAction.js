import React from "react";
import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ListItemDeleteAction = ({ onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={{ width: 70, backgroundColor: "#F00" }}>
      <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
    </View>
  </TouchableWithoutFeedback>
);

export default ListItemDeleteAction;
