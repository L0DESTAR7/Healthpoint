import { Text, View } from "react-native";
import SectionChipProps from "../../types/SectionChipProps";
import { LinearGradient } from "expo-linear-gradient";

export default function SectionChip(props: SectionChipProps) {

  const label = props.label ?? "section";
  const isActive = props.isActive;

  return (
    <View className="w-32 md:w-40 lg:w-96 h-full">
      {isActive ?
        <LinearGradient colors={['#2BFDB1', "#06754E"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
          className="flex flex-row items-center justify-center w-full h-full rounded-full"
        >
          <Text className="font-lexend leading-[0rem] text-lg md:text-xl lg:text-4xl text-spring-950">{label}</Text>
        </LinearGradient>
        :
        <View className="flex flex-row items-center justify-center w-full h-full rounded-full
          border-2 border-spring-300">
          <Text className="font-lexend leading-[0rem] text-lg md:text-xl lg:text-4xl text-spring-300">{label}</Text>
        </View>
      }
    </View>
  )
}
