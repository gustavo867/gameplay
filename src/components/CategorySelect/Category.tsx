import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";
import { fontScale } from "../../utils/responsive";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon: React.FC<SvgProps>;
  categoryId: string;
  hasCheckBox?: boolean;
  id: string;
};

export default function Category({
  title,
  icon: Icon,
  id,
  hasCheckBox = false,
  categoryId,
  ...rest
}: Props) {
  const { secondary40, secondary50, secondary70, secondary80 } = theme.colors;

  const selectedColors = [secondary80, secondary40];
  const notSelectedColors = [secondary50, secondary40];

  return (
    <S.CategoryContainer {...(rest as any)}>
      <LinearGradient colors={[secondary50, secondary70]}>
        <S.CategoryContent
          colors={
            categoryId === ""
              ? selectedColors
              : categoryId === id
              ? selectedColors
              : notSelectedColors
          }
          style={{
            opacity: categoryId === "" ? 1 : categoryId === id ? 1 : 0.4,
          }}
        >
          {hasCheckBox && categoryId === id && (
            <S.Check
              checked={
                categoryId === "" ? true : categoryId === id ? true : false
              }
            />
          )}
          <Icon width={fontScale(48)} height={fontScale(48)} />
          <S.CategoryTitle>{title}</S.CategoryTitle>
        </S.CategoryContent>
      </LinearGradient>
    </S.CategoryContainer>
  );
}
