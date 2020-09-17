import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Listings from "../screens/listings";
import Details from "../screens/details";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Feed" component={Listings} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

export default FeedNavigator;
