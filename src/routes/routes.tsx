import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Splash from "../screens/Splash";
import Auth from "./auth.routes";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: "transparent",
          },
        }}
        headerMode="none"
      >
        <Stack.Screen name="SignIn" component={Splash} />
        <Stack.Screen name="AuthStack" component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
