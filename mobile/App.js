import React from "react";
import { StyleSheet, StatusBar, View, Button, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Listings from "./app/screens/listings";
import ListingEdit from "./app/screens/listingEdit";
import Account from "./app/screens/account";
import Details from "./app/screens/details";

const Link = ({ label }) => {
  const navigation = useNavigation();

  return (
    <Button
      title="Tweet One"
      onPress={() => navigation.navigate(label, { id: 3 })}
    />
  );
};

const Stack = createStackNavigator();
const Feed = () => (
  <Stack.Navigator initialRouteName="Feed">
    <Stack.Screen name="Feed" component={Listings} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabMenu = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="New" component={ListingEdit} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <View style={styles.screen}>
      {/* <View style={styles.view}> */}
      <NavigationContainer>
        <TabMenu />
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
