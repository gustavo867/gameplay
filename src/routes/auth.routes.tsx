import { createStackNavigator } from "@react-navigation/stack";
import { ServerContextProvider } from "../context/ServerContext";
import React from "react";
import AppointmentDatails from "../screens/AppointmentDatails";
import CreateAppointment from "../screens/CreateAppointment";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function Auth() {
  return (
    <ServerContextProvider>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: "transparent",
          },
        }}
        headerMode="none"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="AppointmentDetails"
          component={AppointmentDatails}
        />
        <Stack.Screen name="CreateAppointment" component={CreateAppointment} />
      </Stack.Navigator>
    </ServerContextProvider>
  );
}
