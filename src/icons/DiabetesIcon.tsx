import { styled } from "nativewind";
import { Path, Svg } from "react-native-svg";
import getFormFactor from "../util/getFormFactor";
import { IconProps } from "../types/IconProps";

const StyledPath = styled(Path, { classProps: ["fill", "stroke"] })

function DiabetesSVG({ fill, ...props }: any) {

  const formFactor = getFormFactor();
  console.log("[DiabetesIcon.tsx]: formFactor = " + formFactor);

  return (
    <Svg
      viewBox="0 0 35 27"
      width={formFactor === "lg" ? 56 : (formFactor === "md" ? 35 : 24)}
      height={formFactor === "lg" ? 43 : (formFactor === "md" ? 24 : 16)}>
      <StyledPath fill={fill}
        d=" M34.04 16.269c0 1.396-1.151 2.494-2.618 2.494-1.466 0-2.618-1.098-2.618-2.494 0-2.734 5.237-2.734 5.237 0Z" />
      <StyledPath fill={fill}
        d=" M17.59 6.354h15.467a1.858 1.858 0 0 1 0 3.715.002.002 0 0 1-.002-.003c.074-.145.115-.303.115-.468-.001-.723-.783-1.309-1.747-1.308-.964 0-1.745.588-1.745 1.31 0 .223-.149.469-.371.469H18.89a.464.464 0 1 0 0 .929h5.549c.964 0 1.746.781 1.746 1.745v.224c0 .964-.782 1.745-1.746 1.745h-5.549a.464.464 0 0 0 0 .929h4.58c.963 0 1.745.782 1.745 1.746v.223c0 .965-.782 1.746-1.746 1.746h-6.518a.464.464 0 0 0 0 .929h3.124c.964 0 1.745.782 1.745 1.746v.223c0 .964-.781 1.746-1.745 1.746H10C4.477 24 0 19.523 0 14a10 10 0 0 1 6.22-9.257L17.467.15a2.015 2.015 0 0 1 1.598 3.697l-1.838.84c-.853.39-.575 1.667.362 1.667Z" />
    </Svg>
  )
}

export default function DiabetesIcon({ isActive }: IconProps) {
  return (
    <>
      <DiabetesSVG fill={
        isActive ?
          "dark:fill-spring-950"
          :
          "fill-spring-800 dark:fill-spring-200"
      }>
      </DiabetesSVG>
    </>
  )
}
