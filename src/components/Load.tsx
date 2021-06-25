import React from "react";
import { ActivityIndicator } from "react-native";
import { theme } from "../global/styles/theme";

export default function Load() {
  return <ActivityIndicator color={theme.colors.primary} size="large" />;
}
