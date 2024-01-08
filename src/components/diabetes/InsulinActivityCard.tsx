import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import LexendText from "../LexendText";
import getFormFactor from "../../util/getFormFactor";
import { useColorScheme } from "nativewind";
import isDark from "../../util/isDark";
import BasalIcon from "../../icons/BasalIcon";
import FastIcon from "../../icons/FastIcon";
import { useAtom } from "jotai";
import latestInsulinLogAtom from "../../atoms/latestInsulinLogAtom";

export default function InsulinActivityCard() {

  const formFactor = getFormFactor();
  const { colorScheme: theme } = useColorScheme();
  const darkColors = ["#AEFFE2", "#2BFDB1"];
  const lightColors = ["#009660", "#2BFDB1"];

  // State
  const [latestInsulinLog] = useAtom(latestInsulinLogAtom);

  return (
    <LinearGradient className="flex flex-row w-full h-12 items-center rounded-md md:rounded-lg md:h-12 lg:h-20 lg:rounded-xl px-2 md:px-3"
      colors={isDark(theme) ? darkColors : lightColors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <View className="flex flex-row w-full h-[95%] justify-between">
        <LexendText class="text-spring-950 text-lg md:mt-0.5 md:text-xl lg:mt-1 lg:text-3xl">
          Latest Insulin
        </LexendText>
        <View className="flex flex-col justify-start place-self-center my-[1px] md:my-[2px] lg:my-1">
          <View className="flex flex-row items-center my-auto">
            {
              latestInsulinLog.type === "basal" ?
                <BasalIcon isActive={false} class="mr-2"></BasalIcon>
                :
                <FastIcon isActive={false} class="mr-2"></FastIcon>
            }
            <LexendText class="text-spring-950 text-lg md:text-xl lg:text-3xl">
              {latestInsulinLog.value}
            </LexendText>
          </View>
          <Text className="font-lexend text-spring-950 text-xs md:text-md md:mb-1.5 lg:text-xl self-end"
            style={formFactor === "lg" ? { lineHeight: 20 } : { lineHeight: 13 }}
          >
            {latestInsulinLog.unit}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}
