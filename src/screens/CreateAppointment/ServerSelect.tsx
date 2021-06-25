import React, { useContext } from "react";
import GuildIcon from "../../components/AppointmentCard/GuildIcon";
import { ServerContext } from "../../context/ServerContext";
import { EvilIcons } from "@expo/vector-icons";

import * as S from "./styles";
import { CDN_IMAGE } from "../../config/discord";

const ServerSelect: React.FC = () => {
  const { serverSelected, setModalOpen } = useContext(ServerContext);

  return (
    <S.ServerSelectContainer onPress={() => setModalOpen(true)}>
      <S.RowCenter>
        {serverSelected ? (
          <GuildIcon
            img={`${CDN_IMAGE}/icons/${serverSelected.id}/${serverSelected.icon}.png`}
          />
        ) : (
          <S.ServerBaseImg />
        )}
        <S.Column>
          <S.ServerSelectTitle>
            {serverSelected ? serverSelected.name : "Selecione um servidor"}
          </S.ServerSelectTitle>
        </S.Column>
      </S.RowCenter>
      <S.ActionBtn>
        <EvilIcons name="chevron-right" size={24} color="#ABB1CC" />
      </S.ActionBtn>
    </S.ServerSelectContainer>
  );
};

export default ServerSelect;
