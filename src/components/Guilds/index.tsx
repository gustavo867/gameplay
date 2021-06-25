import React, { useCallback, useContext } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { ServerContext } from "../../context/ServerContext";
import GuildIcon from "../AppointmentCard/GuildIcon";

import * as S from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import ListDivider from "../AppointmentCard/ListDivider";
import Load from "../Load";
import { CDN_IMAGE } from "../../config/discord";

interface GuildsProps {}

function Guilds({}: GuildsProps) {
  const { servers, setServerSelected, setModalOpen, loading } =
    useContext(ServerContext);

  const handleServerSelected = useCallback(
    (item: typeof servers[0]) => {
      setServerSelected({
        ...item,
      });
      setModalOpen(false);
    },
    [servers]
  );

  return !loading ? (
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
              <GuildIcon
                img={`${CDN_IMAGE}/icons/${item.id}/${item.icon}.png`}
              />
              <S.Column>
                <S.Title>{item.name}</S.Title>
                <S.IsOwner>
                  {item.owner ? "Administrador" : "Convidado"}
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
  ) : (
    <Load />
  );
}

export default Guilds;
