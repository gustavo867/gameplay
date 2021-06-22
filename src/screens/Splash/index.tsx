import React from "react";
import * as S from "./styles";
import Button from "./Button";
import img from "../../assets/illustration.png";
import { useNavigation } from "@react-navigation/core";

function Splash() {
  const { navigate } = useNavigation();

  return (
    <S.Container>
      <S.Image source={img} />
      <S.Title>
        Conecte-se{"\n"}e organize suas{"\n"}jogatinas
      </S.Title>
      <S.Subtitle>
        Crie grupos para jogar seus games{"\n"}favoritos com seus amigos
      </S.Subtitle>

      <Button text="Entrar com discord" onPress={() => navigate("AuthStack")} />
    </S.Container>
  );
}

export default Splash;
