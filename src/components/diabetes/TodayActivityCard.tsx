import { View } from "react-native";
import LexendText from "../LexendText";
import GlucoseActivityCard from "./GlucoseActivityCard";
import InsulinActivityCard from "./InsulinActivityCard";
import getFormFactor from "../../util/getFormFactor";



export default function TodayActivityCard() {

  const formFactor = getFormFactor();

  return (
    <View className="bg-spring-200 dark:bg-zinc-800 w-full h-full rounded-card">
      <View className="flex flex-col w-full h-full items-center justify-center">
        <View className="w-[90%] h-[85%] bg-yellow-500/0"
          style={formFactor === "lg" ? { gap: 6 } : { gap: 4 }}
        >
          <LexendText class="text-spring-800 dark:text-spring-200 text-3xl mb-2 md:text-4xl lg:mb-4 lg:text-5xl">
            Today's Activity
          </LexendText>
          <GlucoseActivityCard />
          <InsulinActivityCard />
        </View>
      </View>
    </View>
  );
}
