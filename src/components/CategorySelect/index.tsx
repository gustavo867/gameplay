import React from "react";
import { categories } from "../../utils/categories";
import { fontScale } from "../../utils/responsive";
import Category from "./Category";

import * as S from "./styles";

type Props = {
  currentCategory: string;
  setCategory: (categoryId: string) => void;
};

function CategorySelect({ currentCategory, setCategory }: Props) {
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
          onPress={() => setCategory(category.id)}
        />
      ))}
    </S.Container>
  );
}

export default CategorySelect;
