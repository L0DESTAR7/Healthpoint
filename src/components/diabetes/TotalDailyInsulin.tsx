import { Text, View } from "react-native";
import getFormFactor from "../../util/getFormFactor";
import TotalBasalCard from "./TotalBasalCard";
import TotalFastCard from "./TotalFastCard";


export default function TotalDailyInsulin() {

  const formFactor = getFormFactor();

  return (
    <View className="flex flex-col w-full h-full lg:mt-2">
      <Text className="w-full font-lexend  text-spring-800 dark:text-spring-200 text-lg mb-1 md:text-xl md:mb-1.5 lg:text-[28px] lg:mb-2 lg:tracking-tighter"
        style={formFactor === "md" ? { lineHeight: 20 } : formFactor === "sm" ? { lineHeight: 18 } : {}}
      >
        Total Daily Insulin
      </Text>
      <View className="flex flex-row w-[160px] md:w-[180px] lg:w-[220px] lg:mt-3 h-full justify-around">
        <TotalBasalCard />
        <TotalFastCard />
      </View>
    </View>
  );
}
