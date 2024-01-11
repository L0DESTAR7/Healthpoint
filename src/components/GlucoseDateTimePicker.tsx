import { useAtom } from "jotai";
import { Text, View } from "react-native";
import glucoseDateTimePickerAtom from "../atoms/forms/glucose/glucoseDateTimePickerAtom";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DatePickerModal, TimePickerModal } from "react-native-paper-dates";
import { useCallback } from "react";
import glucoseDateTimeAtom from "../atoms/forms/glucose/glucoseDateTimeAtom";
import glucoseTimePickerAtom from "../atoms/forms/glucose/glucoseTimePickerAtom";
import GlucoseLogAtom from "../atoms/forms/glucose/glucoseLogAtom";
import CalendarIcon from "../icons/CalendarIcon";
import getFormFactor from "../util/getFormFactor";


export default function GlucoseDateTimePicker() {

  const formFactor = getFormFactor();

  let tempDate = new Date();

  // State
  const [glucoseDateTime, setGlucoseDateTime] = useAtom(glucoseDateTimeAtom);
  const [glucoseLog, setGlucoseLog] = useAtom(GlucoseLogAtom);
  const [isDateTimePickerVisible, setDateTimePickerVisibility] = useAtom(glucoseDateTimePickerAtom);
  const [isTimePickerVisible, setTimePickerVisibility] = useAtom(glucoseTimePickerAtom);

  const onDismissDate = useCallback(() => {
    console.log("[GlucoseDateTimePicker.tsx]: onDismissDate()");
    setDateTimePickerVisibility(false);
  }, [setDateTimePickerVisibility]);

  const onConfirmDate = useCallback((params: any) => {
    console.log("[GlucoseDateTimePicker.tsx]: onConfirmDate()");
    setDateTimePickerVisibility(false);
    tempDate = params.date;
    setTimePickerVisibility(true);
  }, [setDateTimePickerVisibility, setGlucoseDateTime, setTimePickerVisibility]);

  const onDismissTime = useCallback(() => {
    setTimePickerVisibility(false);
  }, [setTimePickerVisibility]);

  const onConfirmTime = useCallback(({ hours, minutes }: any) => {
    setTimePickerVisibility(false);
    tempDate.setHours(hours);
    tempDate.setMinutes(minutes)
    setGlucoseDateTime(tempDate);
    setGlucoseLog({ value: glucoseLog.value, date: tempDate, unit: glucoseLog.unit });
  }, [setTimePickerVisibility, setGlucoseDateTime])

  const openPicker = () => {
    console.log("[GlucoseDateTimePicker.tsx]: openDateTimePicker()");
    setDateTimePickerVisibility(true)
  }

  const dayOfMonth = glucoseDateTime.getDate();
  const month = glucoseDateTime.getMonth(); // 0 Indexed, needs to be incremented for regular use
  const year = glucoseDateTime.getFullYear();
  const time = glucoseDateTime.toLocaleString('en-Us', { hour: 'numeric', minute: 'numeric', hour12: true });

  return (
    <View className="bg-spring-800 dark:bg-spring-200 w-[60%] h-[90%] rounded-md md:rounded-lg lg:rounded-xl">
      <TouchableOpacity
        className="w-full h-full"
        onPress={openPicker}
      >
        <View
          className="flex flex-row w-full h-full items-center justify-center"
          style={formFactor === "lg" ? { gap: 8 } : formFactor === "md" ? { gap: 8 } : { gap: 4 }}
        >
          <CalendarIcon isActive={false} />
          <Text className="text-spring-200 dark:text-Darkbg font-lexend md:text-base lg:text-xl">
            {dayOfMonth}/{month + 1}/{year} - {time}
          </Text>
        </View>
        <DatePickerModal
          visible={isDateTimePickerVisible}
          locale="en"
          mode="single"
          onDismiss={onDismissDate}
          date={glucoseDateTime}
          onConfirm={onConfirmDate}
        />
        <TimePickerModal
          visible={isTimePickerVisible}
          onDismiss={onDismissTime}
          onConfirm={onConfirmTime}
        />
      </TouchableOpacity>
    </View>
  );
}
