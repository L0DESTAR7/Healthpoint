import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import LexendText from "../LexendText";
import BasalIcon from "../../icons/BasalIcon";
import { useAtom } from "jotai";
import totalDailyBasalAtom from "../../atoms/totalDailyBasalAtom";


export default function TotalBasalCard() {

  // State 
  const [totalDailyBasal] = useAtom(totalDailyBasalAtom);

  return (
    <LinearGradient className="w-16 h-[64px] md:h-[66px] lg:w-[86px] lg:h-24 rounded-lg"
      colors={["#009660", "#076042"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View className="flex flex-col w-full h-full mt-0.5 lg:mt-0 bg-sky-900/0 items-center"
        style={{ gap: 4 }}
      >
        <LexendText class="text-spring-50 lg:text-2xl">
          Basal
        </LexendText>
        <BasalIcon isActive={true}></BasalIcon>
        <LexendText class="text-spring-50 lg:text-2xl">
          {totalDailyBasal}
        </LexendText>
      </View>
    </LinearGradient>
  );
}
