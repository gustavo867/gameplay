import React from "react";
import { AntDesign } from "@expo/vector-icons";
import * as S from "./styles";
import { theme } from "../../../global/styles/theme";
import Avatar from "../../../components/Avatar";
import { useNavigation } from "@react-navigation/core";

function Header() {
  const { navigate } = useNavigation();

  return (
    <S.Header>
      <S.Row>
        <Avatar url="https://avatars.githubusercontent.com/u/63013756?v=4" />
        <S.ColumnText>
          <S.Row>
            <S.UserNameLight>Olá,</S.UserNameLight>
            <S.UserNameBold>Gustavo</S.UserNameBold>
          </S.Row>
          <S.Message>Hoje é dia de vitória</S.Message>
        </S.ColumnText>
      </S.Row>
      <S.ButtonContainer onPress={() => navigate("CreateAppointment")}>
        <AntDesign name="plus" size={24} color={theme.colors.heading} />
      </S.ButtonContainer>
    </S.Header>
  );
}

export default Header;
