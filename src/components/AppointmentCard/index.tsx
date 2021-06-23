import React from "react";
import { getNameByCategory } from "../../utils/getNameByCategory";
import DateSvg from "../../assets/calendar.svg";
import PlayerSvg from "../../assets/player.svg";
import GuildIcon from "./GuildIcon";
import * as S from "./styles";
import { fontScale } from "../../utils/responsive";
import { useNavigation } from "@react-navigation/core";

interface AppointmentCardProps {
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
}

function AppointmentCard(props: AppointmentCardProps) {
  const { navigate } = useNavigation();

  return (
    <S.Container
      activeOpacity={0.8}
      onPress={() => navigate("AppointmentDetails", { ...props })}
    >
      <GuildIcon img={props.guild.icon} />
      <S.Column>
        <S.HeaderContainer>
          <S.Title>{props.guild.name}</S.Title>
          <S.Category>{getNameByCategory(props.category)}</S.Category>
        </S.HeaderContainer>
        <S.Space />
        <S.FooterContainer>
          <S.Row>
            <DateSvg width={fontScale(14)} height={fontScale(14)} />
            <S.Hour>{props.date}</S.Hour>
          </S.Row>
          <S.Row>
            <PlayerSvg
              fill={props.guild.owner ? "#E51C44" : "#32BD50"}
              width={fontScale(14)}
              height={fontScale(14)}
            />
            <S.Hour
              style={{
                color: props.guild.owner ? "#E51C44" : "#32BD50",
              }}
            >
              {props.guild.owner ? "Anfitrião" : "Visitante"}
            </S.Hour>
          </S.Row>
        </S.FooterContainer>
      </S.Column>
    </S.Container>
  );
}

export default AppointmentCard;
