import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, View } from "react-native";

import ListingEdit from "./app/screens/listingEdit";

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>
        <ListingEdit />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  view: {
    flex: 1,
  },
  img: { width: 200, height: 200, backgroundColor: "#999" },
});
