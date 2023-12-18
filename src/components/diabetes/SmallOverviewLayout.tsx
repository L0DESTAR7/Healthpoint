import { View } from "react-native";
import TodayActivityCard from "./TodayActivityCard";
import GlucoseLogCard from "./GlucoseLogCard";
import InsulinLogCard from "./InsulinLogCard";



export default function SmallOverviewLayout() {

  return (
    <View className="flex flex-col items-center w-full space-y-5 bg-yellow-500/0">
      <View className="w-[95%] h-72">
        <TodayActivityCard></TodayActivityCard>
      </View>
      <View className="w-[95%] h-36">
        <GlucoseLogCard></GlucoseLogCard>
      </View>
      <View className="w-[95%] h-36">
        <InsulinLogCard></InsulinLogCard>
      </View>
      <View className="w-[95%] h-12">
      </View>
    </View>
  )
}
