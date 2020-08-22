import React from "react";
import Welcome from "./app/screens/welcome";
import ViewImage from "./app/screens/viewImage";
import Details from "./app/screens/details";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Messages from "./app/screens/messages";
import Account from "./app/screens/account";

console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <Account />
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
