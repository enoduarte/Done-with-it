import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Account from "../screens/account";
import Messages from "../screens/messages";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator mode="card" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Account" component={Account} />
    <Stack.Screen name="Messages" component={Messages} />
  </Stack.Navigator>
);

export default AccountNavigator;
