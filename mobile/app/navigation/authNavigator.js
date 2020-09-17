import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/login";
import Register from "../screens/register";
import Welcome from "../screens/welcome";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

export default AuthNavigator;
