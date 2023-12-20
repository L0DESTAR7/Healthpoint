import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import LexendText from "../LexendText";
import getFormFactor from "../../util/getFormFactor";
import { useColorScheme } from "nativewind";
import isDark from "../../util/isDark";
import BasalIcon from "../../icons/BasalIcon";
import FastIcon from "../../icons/FastIcon";

export default function InsulinActivityCard() {

  const formFactor = getFormFactor();
  const { colorScheme: theme } = useColorScheme();
  const darkColors = ["#AEFFE2", "#2BFDB1"];
  const lightColors = ["#009660", "#2BFDB1"];

  return (
    <LinearGradient className="flex flex-row w-full h-[50px] items-center rounded-md md:rounded-lg md:h-14 lg:h-20 lg:rounded-xl px-2 md:px-3"
      colors={isDark(theme) ? darkColors : lightColors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <View className="flex flex-row w-full h-[95%] justify-between">
        <LexendText class="text-spring-950 text-lg md:mt-0.5 md:text-xl lg:mt-1 lg:text-3xl">
          Latest Insulin
        </LexendText>
        <View className="flex flex-col justify-start mt-[1px] md:mt-[2px] lg:mt-1">
          <View className="flex flex-row items-center">
            {
              // TODO: Check Insulin type to determine which Icon to use.
              <FastIcon isActive={false} class="mr-2"></FastIcon>
            }
            <LexendText class="text-spring-950 text-lg md:text-xl lg:text-3xl">
              20
            </LexendText>
          </View>
          <Text className="font-lexend text-spring-950 text-xs md:text-md lg:text-xl self-end"
            style={formFactor === "lg" ? { lineHeight: 20 } : { lineHeight: 13 }}
          >
            Unit
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}
