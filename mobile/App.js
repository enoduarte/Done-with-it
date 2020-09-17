import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/authNavigator";
import AppNavigator from "./app/navigation/appNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  return (
    <View style={styles.screen}>
      {/* <View style={styles.view}> */}
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  view: {
    flex: 1,
    // backgroundColor: "#F00",
  },
});
