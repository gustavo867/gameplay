import React, { ReactNode } from "react";
import { Modal, ModalProps } from "react-native";
import Background from "../Background";

import * as S from "./styles";

interface ModalViewProps extends ModalProps {
  children: ReactNode;
}

function ModalView({ children, ...rest }: ModalViewProps) {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <S.Overlay>
        <S.Container>
          <Background>
            <S.Bar />
            {children}
          </Background>
        </S.Container>
      </S.Overlay>
    </Modal>
  );
}

export default ModalView;
