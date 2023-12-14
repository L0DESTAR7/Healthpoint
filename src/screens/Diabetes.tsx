import { Text, View } from "react-native";
import tw from "../tailwind";

export default function Diabetes() {
  return (
    <View style={tw`flex-1 items-center justify-center bg-Lightbg dark:bg-Darkbg`}>
      <Text style={tw`text-spring-950 dark:text-spring-500`}>This is Diabetes Tab</Text>
    </View>
  )
}
