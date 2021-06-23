import React, { ReactNode } from "react";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

import * as S from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fontScale } from "../../utils/responsive";
import { useNavigation } from "@react-navigation/core";

interface HeaderProps {
  title: string;
  action?: ReactNode;
}

function Header({ title, action }: HeaderProps) {
  const { top } = useSafeAreaInsets();
  const { goBack } = useNavigation();

  return (
    <S.Container
      style={{
        paddingTop: fontScale(top) + fontScale(15),
      }}
      colors={["#171F52", "#1D2766"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0.2 }}
    >
      <S.ActionBtn onPress={() => goBack()}>
        <Feather name="arrow-left" size={24} color={theme.colors.heading} />
      </S.ActionBtn>
      <S.Title>{title}</S.Title>
      {action ? <S.CommonView>{action}</S.CommonView> : <S.CommonView />}
    </S.Container>
  );
}

export default Header;
