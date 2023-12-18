import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { View } from "react-native";
import SectionChip from "./SectionChip";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TopTabBar(props: MaterialTopTabBarProps) {

  console.log("[TopTabBar.tsx]: " + props.state.index);
  const index = props.state.index;

  const handleOnPress = () => {
    index === 0 ?
      props.navigation.navigate("Simulation")
      :
      props.navigation.navigate("Overview")
  }

  return (
    <View className="flex flex-row my-6 md:my-7 lg:my-12 items-center justify-between w-full h-10 md:h-12 lg:h-20 dark:bg-Darkbg rounded-full">
      <TouchableOpacity activeOpacity={index === 0 ? 1 : 0.3} onPress={handleOnPress}>
        <SectionChip isActive={index === 0} label="Overview"></SectionChip>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={index === 1 ? 1 : 0.3} onPress={handleOnPress}>
        <SectionChip isActive={index === 1} label="Simulation"></SectionChip>
      </TouchableOpacity>
    </View>
  )
}
