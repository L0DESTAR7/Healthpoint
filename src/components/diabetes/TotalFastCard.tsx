import { LinearGradient } from "expo-linear-gradient";
import { useColorScheme } from "nativewind";
import isDark from "../../util/isDark";
import { View } from "react-native";
import LexendText from "../LexendText";
import FastIcon from "../../icons/FastIcon";


export default function TotalFastCard() {

  const { colorScheme: theme } = useColorScheme();

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
          14
        </LexendText>
      </View>
    </LinearGradient>
  );
}
