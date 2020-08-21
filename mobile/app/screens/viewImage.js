import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImage() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={[styles.icon, { left: 10 }]}
        name="close"
        size={35}
        color="white"
      />
      <MaterialCommunityIcons
        style={[styles.icon, { right: 10 }]}
        name="trash-can-outline"
        size={35}
        color="white"
      />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.black },
  icon: { position: "absolute", top: 20 },
  image: { width: "100%", height: "100%" },
});

export default ViewImage;
