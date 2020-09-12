import React, { useState, useEffect } from "react";
import { StyleSheet, StatusBar, SafeAreaView, View, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Login from "./app/screens/login";
import Register from "./app/screens/register";
import ListingEdit from "./app/screens/listingEdit";
import Messages from "./app/screens/messages";
import Listings from "./app/screens/listings";

const cats = [
  { label: "Roupa", value: 1 },
  { label: "Moveis", value: 2 },
  { label: "Camera", value: 3 },
];

export default function App() {
  async function reqPermission() {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) Alert("You need to enable permission to access the library");
  }

  useEffect(() => {
    reqPermission();
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>
        <Listings />
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
});
