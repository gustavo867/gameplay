import { ReactNode } from "react";

import { Text } from "react-native";

import { Container } from "./styles";

interface CategorySelectProps {
  children: ReactNode;
}

function CategorySelect() {
  return (
    <Container>
      <Text>CategorySelect</Text>
    </Container>
  );
}

export default CategorySelect;
