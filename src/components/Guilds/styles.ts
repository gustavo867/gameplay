import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import { fontScale } from "../../utils/responsive";

const { width } = Dimensions.get("screen");

export const Container = styled.View``;

export const GuildContainer = styled.TouchableOpacity`
  width: ${width}px;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${fontScale(15)}px;
  flex-direction: row;
  margin-top: ${fontScale(5)}px;
`;

export const Column = styled.View`
  margin-left: ${fontScale(20)}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center; ;
`;

export const Title = styled.Text`
  color: ${theme.colors.heading};
  font-size: ${fontScale(18)}px;
  font-family: "Bold";
`;

export const IsOwner = styled.Text`
  color: ${theme.colors.highlight};
  font-size: ${fontScale(13)}px;
  font-family: "Regular";
`;
