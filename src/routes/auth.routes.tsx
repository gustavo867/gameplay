import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "transparent",
        },
      }}
      headerMode="none"
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
