import React from "react";
import { Image, TouchableOpacityProps } from "react-native";
import imgDiscord from "../../assets/discord.png";
import * as S from "./styles";

interface Props extends TouchableOpacityProps {
  text: string;
  haveIcon?: boolean;
}

export default function Button({ text, haveIcon = true, ...rest }: Props) {
  return (
    <S.ButtonContainer {...(rest as any)}>
      {haveIcon && (
        <S.LeftContainerIcon>
          <Image source={imgDiscord} />
        </S.LeftContainerIcon>
      )}
      <S.ButtonText>{text}</S.ButtonText>
    </S.ButtonContainer>
  );
}
