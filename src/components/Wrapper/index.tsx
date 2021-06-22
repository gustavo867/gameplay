import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface WrapperProps {
  children: ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
}

export default Wrapper;
