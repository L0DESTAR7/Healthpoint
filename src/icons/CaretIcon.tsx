import { styled } from "nativewind";
import { Path, Svg } from "react-native-svg";
import getFormFactor from "../util/getFormFactor";
import { IconProps } from "../types/IconProps";
import { View } from "react-native";

const StyledPath = styled(Path, { classProps: ["fill", "stroke"] })

function CaretSVG({ fill, ...props }: any) {

  const formFactor = getFormFactor();
  console.log("[CaretIcon.tsx]: formFactor = " + formFactor);

  return (
    <Svg
      viewBox="0 0 8 4"
      width={formFactor === "lg" ? 10 : (formFactor === "md" ? 8 : 7)}
      height={formFactor === "lg" ? 5 : (formFactor === "md" ? 4 : 4)}>
      <StyledPath fill={fill} d="M7.893.57 4.257 3.901a.392.392 0 0 1-.514 0L.107.57a.326.326 0 0 1-.1-.17.308.308 0 0 1 .02-.193.341.341 0 0 1 .135-.15A.388.388 0 0 1 .364 0h7.272c.072 0 .142.02.202.056.06.037.107.089.134.15.028.06.035.128.021.192a.326.326 0 0 1-.1.171Z" />
    </Svg>
  )
}


export default function CaretIcon(props: IconProps) {

  return (
    <View className={props.class}>
      <CaretSVG fill={
        "fill-spring-200 dark:fill-Darkbg"
      }>
      </CaretSVG>
    </View>
  )
}

