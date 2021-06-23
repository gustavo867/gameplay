import React from "react";
import { fontScale } from "../../utils/responsive";
import DefaultGradient from "../DefaultGradient";
import * as S from "./styles";

type Props = {
  img: string | null;
};

export default function GuildIcon({ img }: Props) {
  return (
    <DefaultGradient borderRadius={fontScale(10)}>
      <S.GuildIconContainer
        resizeMode="cover"
        resizeMethod="resize"
        source={{
          uri: img
            ? img
            : "https://yt3.ggpht.com/ytc/AAUvwngHu0mU1UvMQPWZZM1mFsTJTwZH_EoymRvmG23peQ=s900-c-k-c0x00ffffff-no-rj",
        }}
      />
    </DefaultGradient>
  );
}
