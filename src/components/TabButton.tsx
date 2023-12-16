import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, View } from "react-native";
import IconProvider from "./IconProvider";

export default function TabButton(props: BottomTabBarButtonProps) {

  const isActive = props.accessibilityState?.selected ?? false;
  const label = props.to?.replace("/", "") ?? "Diabetes";

  return (
    <TouchableOpacity onPress={props.onPress} className="flex flex-row justify-center items-center px-3 md:px-4 lg:px-6 lg:mx-8">
      <View className={isActive ?
        "flex flex-row justify-center w-[75px] h-7 rounded-lg md:w-[96px] md:h-[42px] md:rounded-xl lg:w-[184px] lg:h-[67px] lg:rounded-2xl bg-spring-500"
        :
        ""
      }>
        {
          isActive ?
            <View className="flex flex-row w-full items-center justify-around">
              <IconProvider label={label} isActive={isActive}></IconProvider>
              <Text className="font-lexend-medium font-medium text-spring-950 text-2xs md:text-xs lg:text-2xl">{label}</Text>
            </View>
            :
            <IconProvider label={label} isActive={isActive}></IconProvider>
        }
      </View>
    </TouchableOpacity>
  );
}
