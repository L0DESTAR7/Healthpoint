import { View } from "react-native";
import TodayActivityCard from "./TodayActivityCard";
import GlucoseLogCard from "./GlucoseLogCard";
import InsulinLogCard from "./InsulinLogCard";



export default function LargeOverviewLayout() {

  return (
    <View className="flex flex-row w-full h-[480px] space-x-5">
      <View className="w-[48%] h-full">
        <TodayActivityCard></TodayActivityCard>
      </View>
      <View className="flex flex-col w-full h-full justify-between">
        <View className="w-[49%] h-[46%]">
          <GlucoseLogCard></GlucoseLogCard>
        </View>
        <View className="w-[49%] h-[46%]">
          <InsulinLogCard></InsulinLogCard>
        </View>
      </View>
    </View>
  )
}
