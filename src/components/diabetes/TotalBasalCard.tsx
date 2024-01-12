import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import LexendText from "../LexendText";
import BasalIcon from "../../icons/BasalIcon";
import { MainRealmContext } from "../../contexts/MainRealmContext";
import { Insulin } from "../../models/Insulin";


export default function TotalBasalCard() {

  // State 
  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  let tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const results = MainRealmContext.useQuery(
    Insulin,
    (collection) => {
      return collection
        .filtered("date <= $0 && date >= $1", tomorrow, today)
        .filtered("type == $0", "basal")
    }
  )

  const totalDailyBasal = results.sum("value") ?? 0;
  console.log("hjahahah")
  console.log(results.length);

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
