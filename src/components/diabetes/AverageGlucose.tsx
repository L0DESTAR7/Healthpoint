import { Text, View } from "react-native";
import getFormFactor from "../../util/getFormFactor";
import averageGlucoseAtom from "../../atoms/averageGlucoseAtom";
import { useAtom } from "jotai";
import { MainRealmContext } from "../../contexts/MainRealmContext";
import { Glucose } from "../../models/Glucose";

export default function AverageGlucose() {

  const formFactor = getFormFactor();

  // State
  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  let tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const results = MainRealmContext.useQuery(
    Glucose,
    (collection) => {
      return collection.filtered("date <= $0 && date >= $1", tomorrow, today);
    }
  )

  const averageGlucose = results.avg("value");

  return (
    <View className="flex flex-col w-20 md:w-24 lg:w-32 h-full"
      style={{
        gap:
          formFactor === "lg" ?
            0
            :
            2
      }}
    >
      <Text className="w-full font-lexend text-spring-800 dark:text-spring-200 text-lg mb-2 md:text-xl lg:text-3xl lg:mb-3"
        style={formFactor === "md" ? { lineHeight: 20 } : formFactor === "sm" ? { lineHeight: 18 } : {}}
      >
        Average Glucose
      </Text>
      <Text className="w-full font-lexend text-spring-950 dark:text-spring-500 text-lg md:text-xl lg:text-3xl"
        style={formFactor === "md" ? { lineHeight: 20 } : formFactor === "sm" ? { lineHeight: 18 } : {}}
      >
        {Math.round(averageGlucose ?? 0)}
      </Text>
      <Text className="w-full font-lexend text-spring-950 dark:text-spring-500 text-lg md:text-xl lg:text-3xl"
        style={formFactor === "md" ? { lineHeight: 20 } : formFactor === "sm" ? { lineHeight: 18 } : {}}
      >
        {"mg/dL"}
      </Text>
    </View>
  )
}
