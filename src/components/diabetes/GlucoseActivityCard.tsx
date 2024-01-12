import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import LexendText from "../LexendText";
import getFormFactor from "../../util/getFormFactor";
import DowntrendIcon from "../../icons/DowntrendIcon";
import { MainRealmContext } from "../../contexts/MainRealmContext";
import { Glucose } from "../../models/Glucose";


export default function GlucoseActivityCard() {

  const formFactor = getFormFactor();
  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  let tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const results = MainRealmContext.useQuery(
    Glucose,
    (collection) => {
      return collection
        .filtered("date <= $0 && date >= $1", tomorrow, today)
        .sorted("date")
    },
  );

  console.log("-------" + JSON.stringify(results.toJSON()));

  const latestGlucoseLog = results[results.length - 1] ??
  {
    value: 0,
    date: new Date(),
    unit: "mg/dL"
  }

  // State 

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
              {latestGlucoseLog.value.toString()}
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
