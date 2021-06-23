import React, { useContext } from "react";
import GuildIcon from "../../components/AppointmentCard/GuildIcon";
import { ServerContext } from "../../context/ServerContext";
import { EvilIcons } from "@expo/vector-icons";

import * as S from "./styles";

const ServerSelect: React.FC = () => {
  const { serverSelected, setModalOpen } = useContext(ServerContext);

  return (
    <S.ServerSelectContainer onPress={() => setModalOpen(true)}>
      <S.RowCenter>
        {serverSelected ? (
          <GuildIcon img={serverSelected.guild.icon} />
        ) : (
          <S.ServerBaseImg />
        )}
        <S.Column>
          <S.ServerSelectTitle>
            {serverSelected
              ? serverSelected.guild.name
              : "Selecione um servidor"}
          </S.ServerSelectTitle>
          {serverSelected && <S.ServerSelectGame>Valorant</S.ServerSelectGame>}
        </S.Column>
      </S.RowCenter>
      <S.ActionBtn>
        <EvilIcons name="chevron-right" size={24} color="#ABB1CC" />
      </S.ActionBtn>
    </S.ServerSelectContainer>
  );
};

export default ServerSelect;
