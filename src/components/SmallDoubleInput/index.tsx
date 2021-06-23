import React, { useCallback, useEffect, useRef } from "react";
import { TextInput } from "react-native";
import * as S from "./styles";

interface SmallDoubleInputProps {
  title: string;
  leftValue: string;
  rightValue: string;
  handleLeftValue: (text: string) => void;
  handleRightValue: (text: string) => void;
  diviser: string;
}

function SmallDoubleInput(props: SmallDoubleInputProps) {
  const firstInputRef = useRef<TextInput>(null);
  const secondInputRef = useRef<TextInput>(null);

  const handleRightValue = useCallback((text: string) => {
    if (props.rightValue.length >= 1) {
      if (text.length === 0) {
        props.handleRightValue(text);
        firstInputRef.current?.focus();

        return;
      }

      props.handleRightValue(text);

      return;
    }

    props.handleRightValue(text);
  }, []);

  useEffect(() => {
    if (firstInputRef.current && secondInputRef.current) {
      if (props.leftValue.length >= 2) {
        secondInputRef.current.focus();
      }
    }
  }, [props.leftValue]);

  return (
    <S.Container>
      <S.Title>{props.title}</S.Title>
      <S.Row>
        <S.SmallInput
          value={props.leftValue}
          onChangeText={props.handleLeftValue}
          maxLength={2}
          keyboardType="number-pad"
          ref={firstInputRef as any}
        />
        <S.Diviser>{props.diviser}</S.Diviser>
        <S.SmallInput
          value={props.rightValue}
          onChangeText={handleRightValue}
          maxLength={2}
          keyboardType="number-pad"
          ref={secondInputRef as any}
        />
      </S.Row>
    </S.Container>
  );
}

export default SmallDoubleInput;
