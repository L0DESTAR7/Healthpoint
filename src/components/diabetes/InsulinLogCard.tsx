import { Text, TextInput, TouchableOpacity, View } from "react-native";
import LexendText from "../LexendText";
import getFormFactor from "../../util/getFormFactor";
import { useAtom, useAtomValue } from "jotai";
import InsulinLogAtom from "../../atoms/forms/insulin/insulinLogAtom";
import { useColorScheme } from "nativewind";
import isDark from "../../util/isDark";
import { LinearGradient } from "expo-linear-gradient";
import { createRef } from "react";
import InsulinDateTimePicker from "../InsulinDateTimePicker";
import insulinDateTimeAtom from "../../atoms/forms/glucose/glucoseDateTimeAtom";
import InsulinTypeMenu from "./InsulinTypeMenu";


export default function InsulinLogCard() {

  // TODO: Implement Insulin Type Menu
  const formFactor = getFormFactor();
  const { colorScheme: theme } = useColorScheme();

  // State 
  const [insulinLog, setInsulinLog] = useAtom(InsulinLogAtom);
  const dateTime = useAtomValue(insulinDateTimeAtom);
  const sendInsulinLog = () => {
    setInsulinLog({ value: insulinLog.value, date: dateTime, unit: insulinLog.unit, type: insulinLog.type });
    insulinInput.current?.clear();
    // TODO: Write Insulin Log to the DB
    console.log(JSON.stringify(insulinLog));
  }
  const insulinInput = createRef<TextInput>();


  return (
    <View className="bg-spring-200 dark:bg-zinc-800 w-full h-full rounded-3xl md:rounded-card lg:rounded-card">
      <View className="flex flex-col w-full h-full items-center justify-center">
        <View className="w-[90%] h-[85%] bg-yellow-500/0"
          style={formFactor === "lg" ? { gap: 6 } : { gap: 4 }}
        >
          <LexendText class="text-spring-800 dark:text-spring-200 text-3xl mb-2 md:text-4xl lg:mb-3 lg:text-5xl">
            Insulin Log
          </LexendText>
          <View className="flex flex-col w-full h-fit bg-red-400/0">
            <View className="flex flex-row w-full h-[40%] bg-sky-400/0 items-center justify-between">
              <InsulinDateTimePicker />
              <View className="flex flex-row bg-spring-800 dark:bg-spring-200 w-[37%] h-[90%] rounded-md md:rounded-lg 
                lg:rounded-xl p-1.5 md:p-2 lg:p-2.5 pr-0">
                <View className="w-[45%] h-full bg-spring-200 dark:bg-Darkbg rounded-md">
                  <TextInput
                    keyboardType="number-pad"
                    underlineColorAndroid={"transparent"}
                    placeholder={"---"}
                    placeholderTextColor={isDark(theme) ? "#AEFFE2" : "#06754E"}
                    maxLength={3}
                    textAlign="center"
                    ref={insulinInput}
                    onChangeText={(value: string) => setInsulinLog({ ...insulinLog, value: Number(value) })}
                    className="font-lexend-medium text-spring-800 dark:text-spring-200 md:text-lg lg:text-2xl"
                  >
                  </TextInput>
                </View>
              </View>
            </View>
            <View className="flex flex-row w-full h-[40%] bg-sky-400/0 items-center justify-between">
              <InsulinTypeMenu />
              <TouchableOpacity
                onPress={sendInsulinLog}
                className="flex flex-row w-[37%] h-[90%] ml-auto mt-auto rounded-full">
                <LinearGradient
                  colors={["#2BFDB1", "#00C076"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  className="flex flex-row w-full h-[90%] lg:h-[85%] rounded-full items-center justify-center"
                >
                  <Text
                    className="text-spring-950 text-lg tracking-tight md:text-xl lg:text-2xl font-lexend-semibold"
                    style={formFactor === "md" ? { lineHeight: 22 } : formFactor === "sm" ? { lineHeight: 20 } : {}}
                  >
                    Add Log
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
