import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import { fontScale } from "../../utils/responsive";

export const Container = styled.View``;

export const Title = styled.Text`
  color: ${theme.colors.heading};
  font-size: ${fontScale(18)}px;
  font-family: "Bold";
`;

export const SmallInput = styled.TextInput`
  width: ${fontScale(48)}px;
  height: ${fontScale(48)}px;
  border-radius: ${fontScale(8)}px;
  background-color: #1d2766;
  border-color: #243189;
  border-width: ${fontScale(2)}px;
  text-align: center;
  color: ${theme.colors.heading};
  font-family: "Regular";
  font-size: ${fontScale(13)}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${fontScale(10)}px;
`;

export const Diviser = styled.Text`
  color: ${theme.colors.highlight};
  font-size: ${fontScale(15)}px;
  font-family: "TextMedium";
  margin-horizontal: ${fontScale(5)}px;
`;
