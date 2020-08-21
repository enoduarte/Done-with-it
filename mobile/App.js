import React from "react";
import Welcome from "./app/screens/welcome";
import ViewImage from "./app/screens/viewImage";
import Details from "./app/screens/details";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Messages from "./app/screens/messages";

console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <Messages />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, paddingTop: StatusBar.currentHeight },
});
