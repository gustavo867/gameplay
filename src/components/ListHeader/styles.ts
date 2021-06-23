import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import { fontScale } from "../../utils/responsive";

const { width } = Dimensions.get("screen");

export const Container = styled.View`
  width: ${width}px;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: ${fontScale(24)}px;
`;

export const Title = styled.Text`
  font-family: "Bold";
  color: ${theme.colors.heading};
  font-size: ${fontScale(18)}px;
`;

export const SubTitle = styled.Text`
  font-family: "Regular";
  color: ${theme.colors.highlight};
  font-size: ${fontScale(13)}px;
`;
