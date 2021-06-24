import React from "react";
import * as S from "./styles";
import Button from "./Button";
import img from "../../assets/illustration.png";
import { useNavigation } from "@react-navigation/core";
import { useAuth } from "../../context/AuthContext";
import { ActivityIndicator, Alert } from "react-native";
import { theme } from "../../global/styles/theme";

function Splash() {
  const { navigate } = useNavigation();
  const { signIn, loading } = useAuth();

  return (
    <S.Container>
      <S.Image source={img} />
      <S.Title>
        Conecte-se{"\n"}e organize suas{"\n"}jogatinas
      </S.Title>
      <S.Subtitle>
        Crie grupos para jogar seus games{"\n"}favoritos com seus amigos
      </S.Subtitle>

      {loading ? (
        <ActivityIndicator color={theme.colors.primary} size="large" />
      ) : (
        <Button text="Entrar com discord" onPress={() => signIn()} />
      )}
    </S.Container>
  );
}

export default Splash;
