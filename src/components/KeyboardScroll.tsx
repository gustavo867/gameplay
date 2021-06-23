import React, { ReactNode } from "react";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { fontScale } from "../utils/responsive";

type Children = {
  children: ReactNode;
};

export default function KeyboardScroll({ children }: Children) {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        flexGrow: 1,
      }}
      behavior="height"
    >
      <ScrollView
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="always"
        style={{
          flex: 1,
          flexGrow: 1,
        }}
        contentContainerStyle={{
          paddingBottom: fontScale(20),
        }}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
