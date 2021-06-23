import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import { fontScale } from "../../utils/responsive";

const { width, height } = Dimensions.get("screen");

type HasCheckBox = {
  hasCheckbox: boolean;
};

type CheckProps = {
  checked: boolean;
};

export const Container = styled.ScrollView`
  min-height: ${fontScale(120)}px;
  padding-left: ${fontScale(20)}px;
  padding-top: ${fontScale(40)}px;
  flex-grow: 0;
`;

export const CategoryContainer = styled.TouchableOpacity`
  width: ${fontScale(100)}px;
  height: ${fontScale(105)}px;
  border-radius: ${fontScale(10)}px;
  border-color: #243189;
  border-width: ${fontScale(3)}px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-right: ${fontScale(15)}px;
`;

export const CategoryContent = styled(LinearGradient)`
  width: ${fontScale(100)}px;
  height: ${fontScale(105)}px;
  background-color: transparent;
  align-items: center;
  justify-content: space-between;
  padding-top: ${fontScale(15)}px;
  padding-bottom: ${fontScale(10)}px;
`;

export const CategoryTitle = styled.Text`
  font-family: "Bold";
  color: ${theme.colors.heading};
  font-size: ${fontScale(15)}px;
`;

export const Check = styled.View<CheckProps>`
  width: ${fontScale(10)}px;
  height: ${fontScale(10)}px;
  background-color: ${(props) =>
    props.checked === true ? theme.colors.primary : theme.colors.secondary100};
  align-self: flex-end;
  position: absolute;
  right: ${fontScale(8)}px;
  top: ${fontScale(10)}px;
  margin-right: ${fontScale(7)}px;
  border-radius: ${fontScale(8)}px;
  border-color: ${(props) =>
    props.checked ? theme.colors.secondary50 : "transparent"};
  border-width: ${(props) => (props.checked === true ? fontScale(2) : 0)}px;
`;
