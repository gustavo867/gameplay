import React from "react";
import * as S from "./styles";
import Button from "./Button";
import img from "../../assets/illustration.png";
import { useNavigation } from "@react-navigation/core";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "react-native";

function Splash() {
  const { navigate } = useNavigation();
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (e) {
      Alert.alert(e);
    }
  };

  return (
    <S.Container>
      <S.Image source={img} />
      <S.Title>
        Conecte-se{"\n"}e organize suas{"\n"}jogatinas
      </S.Title>
      <S.Subtitle>
        Crie grupos para jogar seus games{"\n"}favoritos com seus amigos
      </S.Subtitle>

      <Button text="Entrar com discord" onPress={() => handleSignIn()} />
    </S.Container>
  );
}

export default Splash;
