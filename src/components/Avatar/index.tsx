import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar as AvatarStyled } from "../../screens/Home/Header/styles";
import { theme } from "../../global/styles/theme";
import { fontScale } from "../../utils/responsive";
import DefaultGradient from "../DefaultGradient";

interface AvatarProps {
  url: string;
}

function Avatar({ url }: AvatarProps) {
  return (
    <DefaultGradient>
      <AvatarStyled
        resizeMode="cover"
        resizeMethod="scale"
        source={{ uri: url }}
      />
    </DefaultGradient>
  );
}

export default Avatar;
