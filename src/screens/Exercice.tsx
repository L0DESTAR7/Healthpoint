import { View } from "react-native";
import LexendText from "../components/LexendText";

export default function Exercice() {
  return (
    <View className={`flex-1 items-center justify-center bg-Lightbg dark:bg-Darkbg`}>
      <LexendText class={`text-spring-950 dark:text-spring-500`}>This is Exercice Tab</LexendText>
    </View>
  )
}
