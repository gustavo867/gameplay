import React from "react";
import { categories } from "../../utils/categories";
import { fontScale } from "../../utils/responsive";
import Category from "./Category";

import * as S from "./styles";

type Props = {
  currentCategory: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
};

function CategorySelect({
  currentCategory,
  setCategory,
  hasCheckBox = false,
}: Props) {
  return (
    <S.Container
      contentContainerStyle={{
        paddingRight: fontScale(40),
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          id={category.id}
          categoryId={currentCategory}
          hasCheckBox={hasCheckBox}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </S.Container>
  );
}

export default CategorySelect;
