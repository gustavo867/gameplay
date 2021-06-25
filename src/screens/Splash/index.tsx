import React from "react";
import * as S from "./styles";
import Button from "./Button";
import img from "../../assets/illustration.png";
import { useAuth } from "../../context/AuthContext";
import Load from "../../components/Load";

function Splash() {
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
        <Load />
      ) : (
        <Button text="Entrar com discord" onPress={() => signIn()} />
      )}
    </S.Container>
  );
}

export default Splash;
