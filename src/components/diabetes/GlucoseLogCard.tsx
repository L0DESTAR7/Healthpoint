import { Text, TextInput, TouchableOpacity, View } from "react-native";
import LexendText from "../LexendText";
import getFormFactor from "../../util/getFormFactor";
import { useAtom, useAtomValue } from "jotai";
import GlucoseLogAtom from "../../atoms/forms/glucose/glucoseLogAtom";
import { useColorScheme } from "nativewind";
import isDark from "../../util/isDark";
import glucoseUnitAtom from "../../atoms/forms/glucose/glucoseUnitMenuAtom";
import { Divider, Menu } from "react-native-paper";
import CaretIcon from "../../icons/CaretIcon";
import { LinearGradient } from "expo-linear-gradient";
import { createRef } from "react";
import GlucoseDateTimePicker from "../GlucoseDateTimePicker";
import glucoseDateTimeAtom from "../../atoms/forms/glucose/glucoseDateTimeAtom";


export default function GlucoseLogCard() {

  const formFactor = getFormFactor();
  const { colorScheme: theme } = useColorScheme();

  // State 
  const [glucoseLog, setGlucoseLog] = useAtom(GlucoseLogAtom);
  const [glucoseUnitMenuVisibility, setGlucoseUnitMenuVisibility] = useAtom(glucoseUnitAtom);
  const dateTime = useAtomValue(glucoseDateTimeAtom);
  const closeUnitMenu = () => {
    setGlucoseUnitMenuVisibility(false);
  };
  const openUnitMenu = () => {
    setGlucoseUnitMenuVisibility(true);
  };
  const sendGlucoseLog = () => {
    setGlucoseLog({ value: glucoseLog.value, date: dateTime, unit: glucoseLog.unit });
    glucoseInput.current?.clear();
    // TODO: Write Glucose Log to the DB
    console.log(JSON.stringify(glucoseLog));
  }
  const glucoseInput = createRef<TextInput>();


  return (
    <View className="bg-spring-200 dark:bg-zinc-800 w-full h-full rounded-3xl md:rounded-card lg:rounded-card">
      <View className="flex flex-col w-full h-full items-center justify-center">
        <View className="w-[90%] h-[85%] bg-yellow-500/0"
          style={formFactor === "lg" ? { gap: 6 } : { gap: 4 }}
        >
          <LexendText class="text-spring-800 dark:text-spring-200 text-3xl mb-2 md:text-4xl lg:mb-3 lg:text-5xl">
            Glucose Log
          </LexendText>
          <View className="flex flex-col w-full h-fit bg-red-400/0">
            <View className="flex flex-row w-full h-[40%] bg-sky-400/0 items-center justify-between">
              <GlucoseDateTimePicker />
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
                    ref={glucoseInput}
                    onChangeText={(value: string) => setGlucoseLog({ ...glucoseLog, value: Number(value) })}
                    className="font-lexend-medium text-spring-800 dark:text-spring-200 md:text-lg lg:text-2xl"
                  >
                  </TextInput>
                </View>
                <Menu
                  visible={glucoseUnitMenuVisibility}
                  onDismiss={closeUnitMenu}
                  anchorPosition="bottom"
                  theme={{
                    roundness: 8,
                    colors: {
                      elevation: {
                        level2: isDark(theme) ? "#AEFFE2" : "#06754E"
                      }
                    }
                  }}
                  anchor={
                    <TouchableOpacity
                      onPress={openUnitMenu}
                      className="flex flex-row w-full h-full items-center ml-1 md:ml-1 lg:ml-1.5"
                      style={formFactor === "lg" ? { gap: 2 } : { gap: 1 }}
                    >
                      <LexendText class="text-spring-200 dark:text-Darkbg text-2xs tracking-tighter md:text-xs lg:text-sm lg:font-lexend-medium">
                        {glucoseLog.unit}
                      </LexendText>
                      <CaretIcon isActive={false}></CaretIcon>
                    </TouchableOpacity>}
                >
                  <Menu.Item title={"mg/dL"}
                    style={
                      {
                        backgroundColor: isDark(theme) ? "#AEFFE2" : "#06754E",
                      }
                    }
                    titleStyle={
                      {
                        color: isDark(theme) ? "#151517" : "#AEFFE2"
                      }
                    }
                    onPress={() => {
                      setGlucoseUnitMenuVisibility(false);
                      setGlucoseLog({
                        value: glucoseLog.value,
                        unit: "mg/dL",
                        date: glucoseLog.date
                      });
                    }}
                  />
                  <Divider style={{ backgroundColor: "#000000" }} />
                  <Menu.Item title={"mmol/L"}
                    style={
                      {
                        backgroundColor: isDark(theme) ? "#AEFFE2" : "#06754E",
                      }
                    }
                    titleStyle={
                      {
                        color: isDark(theme) ? "#151517" : "#AEFFE2"
                      }
                    }
                    onPress={() => {
                      setGlucoseUnitMenuVisibility(false);
                      setGlucoseLog({
                        value: glucoseLog.value,
                        unit: "mmol/L",
                        date: glucoseLog.date
                      });
                    }}
                  />
                </Menu>
              </View>
            </View>
            <View className="flex flex-row w-full h-[40%] bg-sky-400/0 items-center justify-between">
              <View className="border-2 border-spring-800 dark:border-spring-200 w-[60%] h-[90%] rounded-md md:rounded-lg lg:rounded-xl">
              </View>
              <TouchableOpacity
                onPress={sendGlucoseLog}
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
