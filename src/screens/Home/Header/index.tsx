import React from "react";
import { AntDesign } from "@expo/vector-icons";
import * as S from "./styles";
import { theme } from "../../../global/styles/theme";
import Avatar from "../../../components/Avatar";
import { useNavigation } from "@react-navigation/core";
import { useAuth } from "../../../context/AuthContext";
import { TouchableOpacity } from "react-native-gesture-handler";

function Header() {
  const { user, signOut } = useAuth();
  const { navigate } = useNavigation();

  return (
    <S.Header>
      <S.Row>
        <TouchableOpacity onPress={() => signOut()}>
          <Avatar url={user.avatar} />
        </TouchableOpacity>
        <S.ColumnText>
          <S.Row>
            <S.UserNameLight>Olá,</S.UserNameLight>
            <S.UserNameBold>{user.firstName}</S.UserNameBold>
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
