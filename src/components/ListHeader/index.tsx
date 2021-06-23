import React from "react";
import * as S from "./styles";

interface ListHeaderProps {
  title: string;
  subTitle: string;
}

function ListHeader({ title, subTitle }: ListHeaderProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.Container>
  );
}

export default ListHeader;
