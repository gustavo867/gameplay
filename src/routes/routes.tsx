import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useAuth } from "../context/AuthContext";
import Splash from "../screens/Splash";
import Auth from "./auth.routes";

const Stack = createStackNavigator();

export default function Routes() {
  const { user } = useAuth();

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
        {user?.id ? (
          <Stack.Screen name="AuthStack" component={Auth} />
        ) : (
          <Stack.Screen name="SignIn" component={Splash} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
