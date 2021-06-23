import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { fontScale, heightPercentageToDP } from "../../utils/responsive";
const { width } = Dimensions.get("screen");

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #0c1238;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: ${width}px;
`;

export const Title = styled.Text`
  font-size: ${fontScale(40)}px;
  line-height: ${fontScale(40)}px;
  color: #ffff;
  font-family: "Bold";
  text-align: center;
  margin-top: ${heightPercentageToDP("-6")}px;
`;

export const Subtitle = styled.Text`
  font-size: ${fontScale(15)}px;
  line-height: ${fontScale(25)}px;
  margin-top: ${fontScale(10)}px;
  color: #dde3f0;
  font-family: "Regular";
  text-align: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: ${width * 0.85}px;
  height: ${fontScale(55)}px;
  background-color: #e51c44;
  margin-top: ${fontScale(30)}px;
  border-radius: ${fontScale(10)}px;
  align-items: center;
  flex-direction: row;
  align-self: center;
`;

export const LeftContainerIcon = styled.View`
  width: ${width * 0.15}px;
  height: ${fontScale(50)}px;
  border-right-color: #991f36;
  border-right-width: 2px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #dde3f0;
  text-align: center;
  flex: 1;
  font-size: ${fontScale(15)}px;
  font-family: "TextMedium";
`;
