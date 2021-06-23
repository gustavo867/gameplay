import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import { fontScale } from "../../utils/responsive";

const { width, height } = Dimensions.get("screen");

type Props = {
  status: string | "online" | "offline" | "busy";
};

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: ${fontScale(25)}px;
  width: ${width}px;
`;

export const Column = styled.View`
  margin-left: ${fontScale(20)}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Username = styled.Text`
  color: ${theme.colors.heading};
  font-family: "Bold";
  font-size: ${fontScale(18)}px;
`;

export const Status = styled.Text`
  color: #abb1cc;
  font-size: ${fontScale(13)}px;
  font-family: "Regular";
`;

export const Dot = styled.View<Props>`
  background-color: ${(props) =>
    props.status === "online"
      ? "#32BD50"
      : props.status === "busy"
      ? "#E51C44"
      : "#ccc"};
  width: ${fontScale(10)}px;
  height: ${fontScale(10)}px;
  border-radius: ${fontScale(10)}px;
  margin-right: ${fontScale(10)}px;
`;
