import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { Dimensions, FlatList, ImageBackground, Text } from "react-native";
import banner from "../../assets/banner.png";
import Header from "../../components/Header";

import * as S from "./styles";
import { BorderlessButton } from "react-native-gesture-handler";
import { fontScale } from "../../utils/responsive";
import { theme } from "../../global/styles/theme";
import { useRoute } from "@react-navigation/core";
import ListHeader from "../../components/ListHeader";
import { members } from "../../utils/members";
import Member from "../../components/Member";
import ListDivider from "../../components/AppointmentCard/ListDivider";
import MemberDivider from "../../components/Member/MemberDivider";

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

function AppointmentDatails() {
  const route = useRoute();
  const params = route.params as RouteProps;

  return (
    <S.Container>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              color={theme.colors.primary}
              size={fontScale(24)}
            />
          </BorderlessButton>
        }
      />
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
      <ListHeader title="Jogadores" subTitle="Total 3" />
      <FlatList
        data={members}
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
    </S.Container>
  );
}

export default AppointmentDatails;
