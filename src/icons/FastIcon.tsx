import { styled } from "nativewind";
import { Path, Svg } from "react-native-svg";
import getFormFactor from "../util/getFormFactor";
import { IconProps } from "../types/IconProps";
import { View } from "react-native";

const StyledPath = styled(Path, { classProps: ["fill", "stroke"] })

function FastSVG({ fill, ...props }: any) {

  const formFactor = getFormFactor();
  console.log("[FastIcon.tsx]: formFactor = " + formFactor);

  return (
    <Svg
      viewBox="0 0 9 12"
      width={formFactor === "lg" ? 20 : (formFactor === "md" ? 14 : 12)}
      height={formFactor === "lg" ? 20 : (formFactor === "md" ? 14 : 12)}>
      <StyledPath fill={fill} d="m8.692 5.874-5.6 6a.4.4 0 0 1-.684-.35l.733-3.666L.26 6.776a.4.4 0 0 1-.15-.65l5.6-6a.4.4 0 0 1 .684.35l-.735 3.67 2.88 1.08a.4.4 0 0 1 .15.648h.003Z" />
    </Svg>
  )
}


export default function FastIcon(props: IconProps) {

  return (
    <View className={props.class}>
      <FastSVG fill={
        !props.overrideDefaultFill ?
          props.isActive ?
            "fill-spring-200 dark:fill-Darkbg"
            :
            "fill-spring-950"
          : `${props.overrideDefaultFill}`
      }>
      </FastSVG>
    </View>
  )
}

