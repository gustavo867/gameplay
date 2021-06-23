import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import { fontScale } from "../../utils/responsive";

const { width, height } = Dimensions.get("screen");

export const Container = styled(LinearGradient)`
  width: ${width}px;
  height: auto;
  padding-bottom: ${fontScale(20)}px;
  padding-horizontal: ${fontScale(20)}px;
  border-bottom-left-radius: ${fontScale(15)}px;
  border-bottom-right-radius: ${fontScale(15)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ActionBtn = styled(BorderlessButton)``;

export const Title = styled.Text`
  text-align: center;
  font-family: "Bold";
  font-size: ${fontScale(20)}px;
  color: ${theme.colors.heading};
`;

export const CommonView = styled.View``;
