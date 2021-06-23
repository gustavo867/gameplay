import React, { useCallback, useContext } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { ServerContext } from "../../context/ServerContext";
import GuildIcon from "../AppointmentCard/GuildIcon";

import * as S from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import ListDivider from "../AppointmentCard/ListDivider";

interface GuildsProps {}

function Guilds({}: GuildsProps) {
  const { servers, setServerSelected, setModalOpen } =
    useContext(ServerContext);

  const handleServerSelected = useCallback(
    (item: typeof servers[0]) => {
      setServerSelected({
        category: item.category,
        guild: item.guild,
        id: item.id,
      });
      setModalOpen(false);
    },
    [servers]
  );

  return (
    <FlatList
      data={servers}
      style={{
        flexGrow: 0,
      }}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <>
          <S.GuildContainer onPress={() => handleServerSelected(item)}>
            <S.Row>
              <GuildIcon img={item.guild.icon} />
              <S.Column>
                <S.Title>{item.guild.name}</S.Title>
                <S.IsOwner>
                  {item.guild.owner ? "Administrador" : "Convidado"}
                </S.IsOwner>
              </S.Column>
            </S.Row>
            <TouchableOpacity>
              <EvilIcons name="chevron-right" size={24} color="#ABB1CC" />
            </TouchableOpacity>
          </S.GuildContainer>
          <ListDivider />
        </>
      )}
    />
  );
}

export default Guilds;
