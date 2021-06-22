import React, { ReactNode } from "react";
import * as S from "./styles";
import { theme } from "../../global/styles/theme";

interface BackgroundProps {
  children: ReactNode;
}

function Background({ children }: BackgroundProps) {
  return (
    <S.Container
      style={{ flex: 1 }}
      colors={[theme.colors.secondary80, theme.colors.secondary100]}
    >
      {children}
    </S.Container>
  );
}

export default Background;
