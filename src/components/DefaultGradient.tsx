import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { fontScale } from "../utils/responsive";

type Children = {
  children: ReactNode;
  borderRadius?: number;
};

export default function DefaultGradient({
  children,
  borderRadius = fontScale(8),
}: Children) {
  return (
    <LinearGradient
      colors={["#243189", "#1B2565"]}
      style={{
        padding: fontScale(2),
        borderRadius: borderRadius,
        overflow: "hidden",
      }}
    >
      {children}
    </LinearGradient>
  );
}
