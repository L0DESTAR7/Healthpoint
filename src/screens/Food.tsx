import { Text, View } from "react-native";

export default function Food() {
  return (
    <View className={`flex-1 items-center justify-center bg-Lightbg dark:bg-Darkbg`}>
      <Text className={`text-spring-950 dark:text-spring-500`}>This is Food Tab</Text>
    </View>
  )
}
