import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import LexendText from "../LexendText";
import getFormFactor from "../../util/getFormFactor";
import DowntrendIcon from "../../icons/DowntrendIcon";
import { useAtom } from "jotai";
import latestGlucoseLogAtom from "../../atoms/latestGlucoseLogAtom";


export default function GlucoseActivityCard() {

  const formFactor = getFormFactor();

  // State 
  const [latestGlucoseLog] = useAtom(latestGlucoseLogAtom);

  return (
    <LinearGradient className="flex flex-row w-full h-12 items-center rounded-md md:rounded-lg md:h-12 lg:h-20 lg:rounded-xl px-2 md:px-3"
      colors={["#2BFDB1", "#00C076"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <View className="flex flex-row w-full h-[95%] justify-between">
        <LexendText class="text-spring-950 text-lg md:mt-0.5 md:text-xl lg:mt-1 lg:text-3xl">
          Latest Glucose
        </LexendText>
        <View className="flex flex-col justify-start mt-[1px] md:mt-[2px] lg:mt-1">
          <View className="flex flex-row items-center">
            <DowntrendIcon isActive={false} class="mr-2"></DowntrendIcon>
            <LexendText class="text-spring-950 text-lg md:text-xl lg:text-3xl">
              {latestGlucoseLog.value}
            </LexendText>
          </View>
          <Text className="font-lexend text-spring-950 text-xs md:text-md lg:text-xl self-end"
            style={formFactor === "lg" ? { lineHeight: 20 } : { lineHeight: 13 }}
          >
            {latestGlucoseLog.unit}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}
