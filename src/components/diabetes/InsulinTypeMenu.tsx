import { Text, TouchableOpacity, View } from "react-native";
import BasalIcon from "../../icons/BasalIcon";
import getFormFactor from "../../util/getFormFactor";
import { useAtom } from "jotai";
import insulinTypeMenuAtom from "../../atoms/forms/insulin/insulinTypeMenuAtom";
import { useCallback } from "react";
import insulinLogAtom from "../../atoms/forms/insulin/insulinLogAtom";
import isDark from "../../util/isDark";
import { useColorScheme } from "nativewind";


export default function InsulinTypeMenu() {

  const formFactor = getFormFactor();

  // State 
  const { colorScheme: theme } = useColorScheme();
  const [insulinType, setInsulinType] = useAtom(insulinTypeMenuAtom);
  const [insulinLog, setInsulinLog] = useAtom(insulinLogAtom);
  const onSelectBasal = useCallback(() => {
    setInsulinType("basal");
    setInsulinLog({
      value: insulinLog.value,
      date: insulinLog.date,
      type: "basal",
      unit: insulinLog.unit,
    })
  }, [setInsulinType, setInsulinLog])

  const onSelectFast = useCallback(() => {
    setInsulinType("fast");
    setInsulinLog({
      value: insulinLog.value,
      date: insulinLog.date,
      type: "fast",
      unit: insulinLog.unit,
    })
  }, [setInsulinType, setInsulinLog])

  return (
    <View className="flex flex-row border-2 border-spring-800 dark:border-spring-200 w-[60%] h-[90%] rounded-md md:rounded-lg lg:rounded-xl overflow-hidden">
      <TouchableOpacity
        className="flex flex-row items-center justify-center w-[50%] h-full"
        style={
          {
            backgroundColor:
              insulinType === "basal" ? // Selected ?
                isDark(theme) ? "#AEFFE2" /* Dark & Selected */ : "#06754E" /* Light & Selected */
                :
                isDark(theme) ? "#27272A" /* Dark & Not Selected */ : "#AEFFE2", /* Light & Not Selected */
            gap: formFactor === "lg" ? 8 : 4,
          }
        }
        onPress={onSelectBasal}
      >
        <BasalIcon isActive={false}
          overrideDefaultFill={
            insulinType === "basal" ? // Selected ?
              "fill-spring-200 dark:fill-zinc-800"
              :
              "fill-spring-800/50 dark:fill-spring-200/50"
          }
        />
        <Text className="font-lexend text-spring-200 dark:text-Darkbg md:text-xl"
          style={
            {
              color:
                insulinType === "basal" ? // Selected ?
                  isDark(theme) ? "#27272A" /* Dark & Selected */ : "#AEFFE2" /* Light & Selected */
                  :
                  isDark(theme) ? "rgba(174,255,226,0.5)" /* Dark & Not Selected */ : "rgba(6,117,78,0.5)", /* Light & Not Selected */
              lineHeight: formFactor === "lg" ? 28 : formFactor === "md" ? 25 : 20,
              fontSize: formFactor === "lg" ? 24 : formFactor === "sm" ? 20 : 18,
            }
          }
        >
          Basal
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex flex-row items-center justify-center w-[50%] h-full"
        style={
          {
            backgroundColor:
              insulinType === "fast" ? // Selected ?
                isDark(theme) ? "#AEFFE2" /* Dark & Selected */ : "#06754E" /* Light & Selected */
                :
                isDark(theme) ? "#27272A" /* Dark & Not Selected */ : "#AEFFE2", /* Light & Not Selected */
            gap: formFactor === "lg" ? 8 : 4
          }
        }
        onPress={onSelectFast}
      >
        <BasalIcon isActive={false}
          overrideDefaultFill={
            insulinType === "fast" ? // Selected ?
              "fill-spring-200 dark:fill-zinc-800"
              :
              "fill-spring-800/50 dark:fill-spring-200/50"
          }
        />
        <Text className="font-lexend text-spring-200 dark:text-Darkbg md:text-xl"
          style={
            {
              color:
                insulinType === "fast" ? // Selected ?
                  isDark(theme) ? "#27272A" /* Dark & Selected */ : "#AEFFE2" /* Light & Selected */
                  :
                  isDark(theme) ? "rgba(174,255,226,0.5)" /* Dark & Not Selected */ : "rgba(6,117,78,0.5)", /* Light & Not Selected */
              lineHeight: formFactor === "lg" ? 28 : formFactor === "md" ? 25 : 20,
              fontSize: formFactor === "lg" ? 24 : formFactor === "sm" ? 20 : 18,
            }
          }
        >
          Fast
        </Text>
      </TouchableOpacity>
    </View>
  )
}
