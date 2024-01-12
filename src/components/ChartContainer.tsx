import { View } from "react-native";
import { MainRealmContext } from "../contexts/MainRealmContext";
import { Glucose } from "../models/Glucose";
import { Insulin } from "../models/Insulin";
import { LineChart } from "react-native-gifted-charts";
import { itemType } from "react-native-gifted-charts/src/LineChart/types";
import { useColorScheme } from "nativewind";
import isDark from "../util/isDark";

export default function ChartContainer() {

  const { colorScheme: theme } = useColorScheme();

  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  let nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  const glucoseResults = MainRealmContext.useQuery(
    Glucose,
    (collection) => {
      return collection
        .filtered("date <= $0 && date >= $1", nextWeek, today)
        .sorted("date")
    }
  );

  const insulinResults = MainRealmContext.useQuery(
    Insulin,
    (collection) => {
      return collection
        .filtered("date <= $0 && date >= $1", nextWeek, today)
        .sorted("date")
    }
  );

  const months = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sept", "Oct", "Nov", "Dec"
  ];
  const insulinData: itemType[] = insulinResults.map(
    (obj, index) => (
      {
        value: obj.value as number,
        label: index % 4 === 0 ?
          obj.date.getDate().toString() + " " + months[obj.date.getMonth()]
          :
          ""
        ,
      }));

  console.log(insulinResults.map(obj => (obj.date.getDate())));
  console.log(insulinResults.map(obj => (obj.date.getDate().toString() + " " + months[obj.date.getMonth()])))

  return (
    <View className="flex flex-col items-center justify-center w-full h-40 rounded-xl bg-spring-200 dark:bg-zinc-800 
      md:h-44 px-3
      lg:h-96 lg:rounded-3xl">

      <LineChart
        isAnimated
        thickness={4}
        color={isDark(theme) ? "#00FFA3" : "#076042"}
        maxValue={300}
        noOfSections={5}
        animateOnDataChange
        animationDuration={1000}
        onDataChangeAnimationDuration={300}
        areaChart
        yAxisTextStyle={{
          color: isDark(theme) ? '#AEFFE2' : '#003724'
        }}
        xAxisLabelTextStyle={
          {
            color: isDark(theme) ? '#AEFFE2' : '#003724'
          }
        }
        data={insulinData}
        hideDataPoints
        startFillColor={isDark(theme) ? '#00FFA3' : '#076042'}
        endFillColor={isDark(theme) ? '#00FFA3' : '#076042'}
        startOpacity={0.2}
        endOpacity={0.2}
        backgroundColor="transparent"
        rulesColor="gray"
        rulesType="solid"
        initialSpacing={10}
        yAxisColor="transparent"
        xAxisColor="#"
        disableScroll={false}
      />
    </View>
  );
}
