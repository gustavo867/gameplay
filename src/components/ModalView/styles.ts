import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import { fontScale } from "../../utils/responsive";

export const Container = styled.View`
  flex: 1;
  margin-top: ${fontScale(50)}px;
`;

export const Overlay = styled.View`
  background-color: ${theme.colors.overlay};
  flex: 1;
`;

export const Bar = styled.View`
  width: ${fontScale(39)}px;
  height: ${fontScale(2)}px;
  border-radius: ${fontScale(2)}px;
  background-color: ${theme.colors.secondary30};
  align-self: center;
  margin-top: ${fontScale(13)}px;
  margin-bottom: ${fontScale(20)}px;
`;
