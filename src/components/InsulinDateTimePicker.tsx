import { useAtom } from "jotai";
import { Text, View } from "react-native";
import insulinDateTimePickerAtom from "../atoms/forms/insulin/insulinDateTimePickerAtom";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DatePickerModal, TimePickerModal } from "react-native-paper-dates";
import { useCallback } from "react";
import insulinDateTimeAtom from "../atoms/forms/insulin/insulinDateTimeAtom";
import insulinTimePickerAtom from "../atoms/forms/insulin/insulinTimePickerAtom";
import InsulinLogAtom from "../atoms/forms/insulin/insulinLogAtom";
import CalendarIcon from "../icons/CalendarIcon";
import getFormFactor from "../util/getFormFactor";


export default function InsulinDateTimePicker() {

  const formFactor = getFormFactor();

  let tempDate = new Date();

  // State
  const [insulinDateTime, setInsulinDateTime] = useAtom(insulinDateTimeAtom);
  const [insulinLog, setInsulinLog] = useAtom(InsulinLogAtom);
  const [isDateTimePickerVisible, setDateTimePickerVisibility] = useAtom(insulinDateTimePickerAtom);
  const [isTimePickerVisible, setTimePickerVisibility] = useAtom(insulinTimePickerAtom);

  const onDismissDate = useCallback(() => {
    console.log("[InsulinDateTimePicker.tsx]: onDismissDate()");
    setDateTimePickerVisibility(false);
  }, [setDateTimePickerVisibility]);

  const onConfirmDate = useCallback((params: any) => {
    console.log("[InsulinDateTimePicker.tsx]: onConfirmDate()");
    setDateTimePickerVisibility(false);
    tempDate = params.date;
    setTimePickerVisibility(true);
  }, [setDateTimePickerVisibility, setInsulinDateTime, setTimePickerVisibility]);

  const onDismissTime = useCallback(() => {
    setTimePickerVisibility(false);
  }, [setTimePickerVisibility]);

  const onConfirmTime = useCallback(({ hours, minutes }: any) => {
    setTimePickerVisibility(false);
    tempDate.setHours(hours);
    tempDate.setMinutes(minutes)
    setInsulinDateTime(tempDate);
    setInsulinLog({ value: insulinLog.value, date: tempDate, unit: insulinLog.unit, type: insulinLog.type });
  }, [setTimePickerVisibility, setInsulinDateTime])

  const openPicker = () => {
    console.log("[InsulinDateTimePicker.tsx]: openDateTimePicker()");
    setDateTimePickerVisibility(true)
  }

  const dayOfMonth = insulinDateTime.getDate();
  const month = insulinDateTime.getMonth(); // 0 Indexed, needs to be incremented for regular use
  const year = insulinDateTime.getFullYear();
  const time = insulinDateTime.toLocaleString('en-Us', { hour: 'numeric', minute: 'numeric', hour12: true });

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
          date={insulinDateTime}
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
