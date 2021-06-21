import React from "react";
import { Image, TouchableOpacityProps } from "react-native";
import imgDiscord from "../../assets/discord.png";
import * as S from "./styles";

interface Props extends TouchableOpacityProps {
  text: string;
}

export default function Button({ text, ...rest }: Props) {
  return (
    <S.ButtonContainer {...(rest as any)}>
      <S.LeftContainerIcon>
        <Image source={imgDiscord} />
      </S.LeftContainerIcon>
      <S.ButtonText>{text}</S.ButtonText>
    </S.ButtonContainer>
  );
}
