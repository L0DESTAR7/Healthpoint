import { View } from "react-native";
import ChartContainer from "../ChartContainer";


export default function Overview() {
  return (
    <View className="flex flex-col w-full h-full items-center justify-between bg-Lightbg dark:bg-Darkbg">
      <ChartContainer></ChartContainer>
    </View>
  )
}
