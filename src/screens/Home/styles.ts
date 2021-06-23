import styled from "styled-components/native";
import { fontScale } from "../../utils/responsive";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  margin-top: ${fontScale(32)}px;
  flex: 1;
`;

export const Space = styled.View`
  height: ${fontScale(20)}px;
`;
