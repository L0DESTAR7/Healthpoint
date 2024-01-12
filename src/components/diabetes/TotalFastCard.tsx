import { LinearGradient } from "expo-linear-gradient";
import { useColorScheme } from "nativewind";
import isDark from "../../util/isDark";
import { View } from "react-native";
import LexendText from "../LexendText";
import FastIcon from "../../icons/FastIcon";
import { MainRealmContext } from "../../contexts/MainRealmContext";
import { Insulin } from "../../models/Insulin";


export default function TotalFastCard() {

  const { colorScheme: theme } = useColorScheme();

  //State

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
        .filtered("type == $0", "fast")
    }
  )

  const totalDailyFast = results.sum("value") ?? 0;

  return (
    <LinearGradient className="w-16 h-[64px] md:h-[66px] lg:w-[86px] lg:h-24 rounded-lg"
      colors={
        isDark(theme) ?
          ["#AEFFE2", "#2BFDB1"]
          :
          ["#70FFCD", "#009660"]
      }
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View className="flex flex-col w-full h-full mt-0.5 lg:mt-0 bg-sky-900/0 items-center"
        style={{ gap: 4 }}
      >
        <LexendText class="text-spring-950 lg:text-2xl">
          Fast
        </LexendText>
        <FastIcon isActive={false}></FastIcon>
        <LexendText class="text-spring-950 lg:text-2xl">
          {totalDailyFast}
        </LexendText>
      </View>
    </LinearGradient>
  );
}
