import React from "react";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import { AuthContextProvider } from "./src/context/AuthContext";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import Background from "./src/components/Background";
import Routes from "./src/routes/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Bold: Rajdhani_700Bold,
    TextMedium: Inter_500Medium,
    TitleMedium: Rajdhani_500Medium,
    Regular: Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthContextProvider>
      <Background>
        <StatusBar style="light" />
        <Routes />
      </Background>
    </AuthContextProvider>
  );
}
