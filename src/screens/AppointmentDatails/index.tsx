import React, { useCallback, useEffect, useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import {
  Alert,
  Dimensions,
  FlatList,
  ImageBackground,
  Platform,
  Share,
  Text,
} from "react-native";
import banner from "../../assets/banner.png";
import Header from "../../components/Header";
import * as Linking from "expo-linking";
import * as S from "./styles";
import { BorderlessButton } from "react-native-gesture-handler";
import { fontScale } from "../../utils/responsive";
import { theme } from "../../global/styles/theme";
import { useRoute } from "@react-navigation/core";
import ListHeader from "../../components/ListHeader";
import Member from "../../components/Member";
import MemberDivider from "../../components/Member/MemberDivider";
import Button from "../Splash/Button";
import { api } from "../../services/api";
import Load from "../../components/Load";

const { width, height } = Dimensions.get("screen");

type RouteProps = {
  id: string;
  guild: {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
  };
  category: string;
  date: string;
  description: string;
};

type Widget = {
  id: string;
  name: string;
  instant_invite: string;
  members: {
    id: string;
    username: string;
    status: string;
    avatar_url: string;
  }[];
  presence_count: number;
};

function AppointmentDatails() {
  const route = useRoute();
  const [widget, setWidget] = useState<Widget | undefined>();
  const [loading, setLoading] = useState(true);
  const params = route.params as RouteProps;

  const fetchGuildInfo = useCallback(async () => {
    try {
      const response = await api.get(`/guilds/${params.guild.id}/widget.json`);

      setWidget(response.data);
    } catch (e) {
      Alert.alert(
        "Verifique as configurações do servidor. Será que o widget está habilitado?"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const handleShareInvite = useCallback(() => {
    const message =
      Platform.OS === "ios"
        ? `Junte-se a ${params.guild.name}`
        : widget!.instant_invite;

    Share.share({
      message,
      url: widget?.instant_invite,
    });
  }, []);

  const handleOpenGuild = useCallback(() => {
    Linking.openURL(widget!.instant_invite);
  }, []);

  useEffect(() => {
    fetchGuildInfo();
  }, []);

  return (
    <S.Container>
      <Header
        title="Detalhes"
        action={
          params.guild.owner && (
            <BorderlessButton onPress={() => handleShareInvite()}>
              <Fontisto
                name="share"
                color={theme.colors.primary}
                size={fontScale(24)}
              />
            </BorderlessButton>
          )
        }
      />
      {loading ? (
        <Load />
      ) : widget ? (
        <>
          <ImageBackground
            style={{
              width: width,
              height: height * 0.3,
              alignItems: "flex-start",
              justifyContent: "flex-end",
              paddingBottom: fontScale(20),
              paddingLeft: fontScale(20),
            }}
            source={banner}
            width={width}
            height={height * 0.3}
          >
            <S.GuildName>{params.guild.name}</S.GuildName>
            <S.Description>{params.description}</S.Description>
          </ImageBackground>
          <S.Space />
          <ListHeader
            title="Jogadores"
            subTitle={`Total: ${widget.members.length}`}
          />
          <FlatList
            data={widget.members}
            keyExtractor={(item) => item.id}
            style={{
              marginTop: fontScale(10),
            }}
            renderItem={({ item, index }) => (
              <>
                <Member {...item} />
                <MemberDivider />
              </>
            )}
          />
          <Button text="Entrar na partida" onPress={() => handleOpenGuild()} />
          <S.Space />
        </>
      ) : (
        <S.GuildName
          style={{
            marginTop: fontScale(20),
            alignSelf: "center",
            textAlign: "center",
            maxWidth: width * 0.8,
          }}
        >
          Widget do servidor não foi configurado
        </S.GuildName>
      )}
    </S.Container>
  );
}

export default AppointmentDatails;
