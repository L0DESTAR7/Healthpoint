import { styled } from "nativewind";
import { Path, Svg } from "react-native-svg";
import getFormFactor from "../util/getFormFactor";
import { IconProps } from "../types/IconProps";
import { View } from "react-native";

const StyledPath = styled(Path, { classProps: ["fill", "stroke"] })

function DowntrendSVG({ fill, ...props }: any) {

  const formFactor = getFormFactor();
  console.log("[DowntrendIcon.tsx]: formFactor = " + formFactor);

  return (
    <Svg
      viewBox="0 0 19 12"
      width={formFactor === "lg" ? 26 : (formFactor === "md" ? 24 : 19)}
      height={formFactor === "lg" ? 19 : (formFactor === "md" ? 18 : 16)}>
      <StyledPath fill={fill} d="M19 6v5.333a.66.66 0 0 1-.199.472.685.685 0 0 1-.48.195h-5.428a.684.684 0 0 1-.48-.195.66.66 0 0 1 0-.943.684.684 0 0 1 .48-.195h3.79l-6.504-6.39-2.913 2.861a.68.68 0 0 1-.48.196.69.69 0 0 1-.48-.196l-6.107-6a.661.661 0 0 1 0-.943.685.685 0 0 1 .96 0l5.627 5.53 2.913-2.863a.68.68 0 0 1 .48-.196.69.69 0 0 1 .48.196l6.984 6.862V6c0-.177.071-.346.199-.471a.685.685 0 0 1 .96 0A.661.661 0 0 1 19 6Z" />
    </Svg>
  )
}


export default function DowntrendIcon(props: IconProps) {

  return (
    <View className={props.class}>
      <DowntrendSVG fill={
        props.isActive ?
          "dark:fill-spring-950"
          :
          "dark:fill-spring-950"
      }>
      </DowntrendSVG>
    </View>
  )
}

