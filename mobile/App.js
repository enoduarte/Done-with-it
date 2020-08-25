import React, { useState } from "react";
import Welcome from "./app/screens/welcome";
import ViewImage from "./app/screens/viewImage";
import Details from "./app/screens/details";
import { StyleSheet, StatusBar, SafeAreaView, View } from "react-native";
import Messages from "./app/screens/messages";
import Account from "./app/screens/account";
import Listings from "./app/screens/listings";
import AppTextInput from "./app/components/appTextInput";
import AppPicker from "./app/components/appPicker";
import Login from "./app/screens/login";

const cats = [
  { label: "Roupa", value: 1 },
  { label: "Moveis", value: 2 },
  { label: "Camera", value: 3 },
];

export default function App() {
  const [cat, setCat] = useState();

  return (
    <SafeAreaView style={styles.screen}>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#f8f4f4",
  },
});
