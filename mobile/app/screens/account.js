import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListItem from "../components/listItem";
import Icon from "../components/icon";
import colors from "../config/colors";
import ListItemSeparator from "../components/listItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", bg: colors.primary },
  },
  { title: "My Messages", icon: { name: "email", bg: colors.secondary } },
];

function Account() {
  return (
    <View>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamadani"
          desc="moshhamadani@hotmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(i) => i.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item: i }) => (
            <ListItem
              title={i.title}
              IconComponent={<Icon name={i.icon.name} bgColor={i.icon.bg} />}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" bgColor="#e4c945" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
});

export default Account;
