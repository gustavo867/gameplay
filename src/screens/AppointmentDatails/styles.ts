import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import { fontScale } from "../../utils/responsive";

const { width, height } = Dimensions.get("screen");

export const Container = styled.View`
  flex: 1;
`;

export const Space = styled.View`
  height: ${fontScale(10)}px;
`;

export const GuildName = styled.Text`
  color: ${theme.colors.heading};
  font-size: ${fontScale(28)}px;
  font-family: "Bold";
`;

export const Description = styled.Text`
  color: ${theme.colors.heading};
  max-width: ${width * 0.8}px;
  font-size: ${fontScale(13)}px;
  font-family: "Regular";
  margin-top: ${fontScale(8)}px;
`;
