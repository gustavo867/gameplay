import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { theme } from "../../../global/styles/theme";
const { width, height } = Dimensions.get("screen");
import { fontScale } from "../../../utils/responsive";

export const Header = styled(SafeAreaView)`
  width: ${width}px;
  padding-horizontal: ${fontScale(18)}px;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: ${fontScale(48)}px;
  height: ${fontScale(48)}px;
  border-radius: ${fontScale(8)}px;
  background-color: ${theme.colors.primary};
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  width: ${fontScale(48)}px;
  height: ${fontScale(48)}px;
  border-radius: ${fontScale(8)}px;
  align-items: center;
  justify-content: center;
`;

export const ColumnText = styled.View`
  margin-left: ${fontScale(20)}px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const UserNameLight = styled.Text`
  color: #dde3f0;
  font-family: "TitleMedium";
  font-size: ${fontScale(24)}px;
`;

export const UserNameBold = styled.Text`
  color: #dde3f0;
  font-family: "Bold";
  font-size: ${fontScale(24)}px;
  margin-left: ${fontScale(5)}px;
`;

export const Message = styled.Text`
  font-family: "Regular";
  font-size: ${fontScale(13)}px;
  color: #abb1cc;
`;
