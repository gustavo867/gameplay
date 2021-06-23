import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../global/styles/theme";
import { fontScale } from "../../utils/responsive";

export default function ListDivider() {
  return (
    <View
      style={{
        width: "70%",
        alignSelf: "flex-end",
        height: fontScale(2),
        backgroundColor: theme.colors.secondary40,
        marginTop: fontScale(5),
        marginBottom: fontScale(15),
      }}
    />
  );
}
