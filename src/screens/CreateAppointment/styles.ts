import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import { fontScale } from "../../utils/responsive";

const { width, height } = Dimensions.get("screen");

export const Container = styled.View`
  flex: 1;
`;

export const InputContainer = styled.View`
  width: ${width * 0.9}px;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Space = styled.View`
  height: ${fontScale(20)}px;
`;

export const SmallSpace = styled.View`
  height: ${fontScale(10)}px;
`;

export const RowCenter = styled.View`
  align-items: center;
  flex-direction: row;
  align-self: flex-start;
`;

export const ServerSelectContainer = styled.TouchableOpacity`
  width: ${width * 0.9}px;
  align-self: center;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  border-color: #243189;
  border-width: ${fontScale(2)}px;
  border-radius: ${fontScale(10)}px;
  padding-right: ${fontScale(10)}px;
  flex-direction: row;
`;

export const ServerBaseImg = styled.View`
  width: ${fontScale(65)}px;
  height: ${fontScale(65)}px;
  border-radius: ${fontScale(10)}px;
  background-color: #1d2766;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Column = styled.View``;

export const ServerSelectTitle = styled.Text`
  color: ${theme.colors.heading};
  font-size: ${fontScale(18)}px;
  font-family: "Bold";
  margin-left: ${fontScale(20)}px;
`;

export const ActionBtn = styled.TouchableOpacity`
  margin-left: ${fontScale(15)}px;
`;

export const ServerSelectGame = styled.Text`
  color: ${theme.colors.highlight};
  font-size: ${fontScale(13)}px;
  margin-left: ${fontScale(20)}px;
  font-family: "Regular";
`;

export const TextArea = styled.TextInput`
  width: ${width * 0.9}px;
  align-self: center;
  text-align: left;
  padding: ${fontScale(10)}px;
  background-color: #1d2766;
  border-color: #243189;
  border-width: ${fontScale(2)}px;
  color: ${theme.colors.heading};
  font-size: ${fontScale(13)}px;
  font-family: "Regular";
  border-radius: ${fontScale(8)}px;
  min-height: ${height * 0.1}px;
`;
