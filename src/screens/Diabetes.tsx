import { View } from "react-native";
import SectionNavigator from "../navigators/SectionNavigator";

export default function Diabetes() {
  return (
    <View className={`flex-1 items-center justify-center bg-Lightbg dark:bg-Darkbg`}>
      <SectionNavigator></SectionNavigator>
    </View>
  )
}
