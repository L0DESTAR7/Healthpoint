import { ReactNode } from "react";
import { Text } from "react-native";

type TextProps = {
  children: ReactNode,
  class?: string,
}

export default function LexendText(props: TextProps) {

  console.log("[LexendText.tsx]: " + props.class);

  return (
    <Text className={"font-lexend " + props.class}>
      {props.children}
    </Text>
  );
}
