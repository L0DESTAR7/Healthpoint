import { styled } from "nativewind";
import { Path, Svg } from "react-native-svg";
import getFormFactor from "../util/getFormFactor";
import { IconProps } from "../types/IconProps";

const StyledPath = styled(Path, { classProps: ["fill", "stroke"] })

function NotificationSVG({ fill, ...props }: any) {

  const formFactor = getFormFactor();
  console.log("[HydrationIcon.tsx]: formFactor = " + formFactor);

  return (
    <Svg
      viewBox="0 0 19 24"
      width={formFactor === "lg" ? 48 : (formFactor === "md" ? 28 : 19)}
      height={formFactor === "lg" ? 36 : (formFactor === "md" ? 24 : 16)}>
      <StyledPath fill={fill} d="M15.69 23.077a.923.923 0 0 1-.923.923H7.382a.923.923 0 0 1 0-1.846h7.385a.923.923 0 0 1 .923.923Zm6.213-3.692a1.823 1.823 0 0 1-1.598.923H1.844A1.845 1.845 0 0 1 .25 17.532c.64-1.104 1.593-4.223 1.593-8.301a9.23 9.23 0 0 1 18.461 0c0 4.076.953 7.197 1.594 8.3a1.834 1.834 0 0 1 .003 1.854h.001Zm-1.598-.924c-.892-1.53-1.846-5.07-1.846-9.23a7.385 7.385 0 1 0-14.77 0c0 4.16-.955 7.7-1.845 9.23h18.461Z" />
    </Svg>
  )
}

export default function NotificationIcon({ isActive }: IconProps) {
  return (
    <>
      <NotificationSVG fill={"fill-spring-500"}>
      </NotificationSVG>
    </>
  )
}

