import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";

const ListItem = ({ title, desc, image, onPress, rightAction }) => (
  <Swipeable renderRightActions={rightAction}>
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </View>
    </TouchableHighlight>
  </Swipeable>
);

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 15 },
  desc: { color: colors.medium },
  image: { width: 70, height: 70, borderRadius: 35, marginRight: 10 },
  title: { fontWeight: "500" },
});

export default ListItem;
