import React, { useState } from "react";
import { StyleSheet, StatusBar, SafeAreaView, View } from "react-native";

import Login from "./app/screens/login";
import Register from "./app/screens/register";
import ListingEdit from "./app/screens/listingEdit";

const cats = [
  { label: "Roupa", value: 1 },
  { label: "Moveis", value: 2 },
  { label: "Camera", value: 3 },
];

export default function App() {
  const [cat, setCat] = useState();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen}>
        <ListingEdit />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    padding: 5,
  },
});
