import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import { fontScale } from "../../utils/responsive";

const { width } = Dimensions.get("screen");

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: ${fontScale(20)}px;
  padding-right: ${fontScale(15)}px;
  width: ${width}px;
`;

export const HeaderContainer = styled.View`
  width: ${width - fontScale(120)}px;
  margin-left: ${fontScale(15)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FooterContainer = styled.View`
  width: ${width - fontScale(120)}px;
  margin-left: ${fontScale(15)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Column = styled.View``;

export const Space = styled.View`
  height: ${fontScale(15)}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${theme.colors.heading};
  font-family: "Bold";
  font-size: ${fontScale(18)}px;
`;

export const GuildIconContainer = styled.Image`
  width: ${fontScale(65)}px;
  height: ${fontScale(65)}px;
  border-radius: ${fontScale(10)}px;
`;

export const Category = styled.Text`
  font-family: "Regular";
  font-size: ${fontScale(13)}px;
  color: ${theme.colors.highlight};
`;

export const Hour = styled.Text`
  font-family: "TextMedium";
  font-size: ${fontScale(12)}px;
  color: ${theme.colors.heading};
  margin-left: ${fontScale(10)}px;
`;
