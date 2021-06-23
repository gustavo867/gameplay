import React from "react";
import { getTextByStatus } from "../../utils/getNameByCategory";
import Avatar from "../Avatar";
import * as S from "./styles";

interface MemberProps {
  id: string;
  username: string;
  avatar_url: string;
  status: string | "online" | "offline" | "busy";
}

function Member({ id, username, avatar_url, status }: MemberProps) {
  return (
    <S.Container>
      <Avatar url={avatar_url} />
      <S.Column>
        <S.Username>{username}</S.Username>
        <S.Row>
          <S.Dot status={status} />
          <S.Status>{getTextByStatus(status)}</S.Status>
        </S.Row>
      </S.Column>
    </S.Container>
  );
}

export default Member;
