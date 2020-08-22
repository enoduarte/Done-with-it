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

const ListItem = ({
  title,
  desc,
  image,
  IconComponent,
  onPress,
  rightAction,
}) => (
  <Swipeable renderRightActions={rightAction}>
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          {desc && <Text style={styles.desc}>{desc}</Text>}
        </View>
      </View>
    </TouchableHighlight>
  </Swipeable>
);

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 15, backgroundColor: "#fff" },
  desc: { color: colors.medium },
  details: { justifyContent: "center", marginLeft: 10 },
  image: { width: 70, height: 70, borderRadius: 35 },
  title: { fontWeight: "500" },
});

export default ListItem;
