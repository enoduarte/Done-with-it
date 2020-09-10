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
import Icon from "./icon";

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
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          {desc && (
            <Text style={styles.desc} numberOfLines={2}>
              {desc}
            </Text>
          )}
        </View>
        <Icon
          name="chevron-right"
          bgColor={null}
          iColor={colors.medium}
          size={25}
        />
      </View>
    </TouchableHighlight>
  </Swipeable>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  desc: { color: colors.medium },
  details: { flex: 1, justifyContent: "center", marginLeft: 10 },
  image: { width: 60, height: 60, borderRadius: 35 },
  title: { fontWeight: "500" },
});

export default ListItem;
