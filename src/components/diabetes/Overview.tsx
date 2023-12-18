import MainScrolLViewStyle from "../../styles/MainScrollViewStyle";
import ChartContainer from "../ChartContainer";
import { ScrollView } from "react-native-gesture-handler";
import ResponsiveOverviewLayout from "./ResponsiveOverviewLayout";


export default function Overview() {

  return (
    <ScrollView className="flex flex-col w-full h-full bg-Lightbg dark:bg-Darkbg"
      contentContainerStyle={MainScrolLViewStyle}
      showsVerticalScrollIndicator={false}
    >
      <ChartContainer></ChartContainer>
      <ResponsiveOverviewLayout></ResponsiveOverviewLayout>
    </ScrollView>
  )
}
