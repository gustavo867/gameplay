import React, { ReactNode } from "react";
import * as S from "./styles";

interface BackgroundProps {
  children: ReactNode;
  paddingTop?: number;
}

function Background({ children, paddingTop = 0 }: BackgroundProps) {
  return (
    <S.Container
      start={{ x: 0, y: 0.5 }}
      end={{ x: 0.8, y: 1 }}
      style={{ flex: 1, paddingTop }}
      colors={["#0E1647", "#0A1033"]}
    >
      {children}
    </S.Container>
  );
}

export default Background;
