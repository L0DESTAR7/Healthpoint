import { View } from "react-native";
import TodayActivityCard from "./TodayActivityCard";
import GlucoseLogCard from "./GlucoseLogCard";
import InsulinLogCard from "./InsulinLogCard";



export default function MediumOverviewLayout() {

  return (
    <View className="flex flex-col items-center w-full space-y-5 bg-yellow-500/0">
      <View className="w-[95%] h-[300px]">
        <TodayActivityCard></TodayActivityCard>
      </View>
      <View className="w-[95%] h-40">
        <GlucoseLogCard></GlucoseLogCard>
      </View>
      <View className="w-[95%] h-40">
        <InsulinLogCard></InsulinLogCard>
      </View>
      <View className="w-[95%] h-16">
      </View>
    </View>
  )
}
