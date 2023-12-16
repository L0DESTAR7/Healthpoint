import { styled } from "nativewind";
import { Path, Svg } from "react-native-svg";
import getFormFactor from "../util/getFormFactor";
import { IconProps } from "../types/IconProps";

const StyledPath = styled(Path, { classProps: ["fill", "stroke"] })

function HydrationSVG({ fill, ...props }: any) {

  const formFactor = getFormFactor();
  console.log("[HydrationIcon.tsx]: formFactor = " + formFactor);

  return (
    <Svg
      viewBox="0 0 19 24"
      width={formFactor === "lg" ? 48 : (formFactor === "md" ? 28 : 19)}
      height={formFactor === "lg" ? 36 : (formFactor === "md" ? 24 : 16)}>
      <StyledPath fill={fill} d="M14.01 4.259A26.838 26.838 0 0 0 9.675.155a.822.822 0 0 0-.96 0A26.839 26.839 0 0 0 4.391 4.26C1.517 7.64 0 11.207 0 14.57c0 2.501.97 4.9 2.695 6.667A9.088 9.088 0 0 0 9.2 24c2.44 0 4.78-.993 6.505-2.762a9.549 9.549 0 0 0 2.695-6.667c0-3.364-1.517-6.93-4.39-10.312ZM9.2 22.286a7.445 7.445 0 0 1-5.32-2.262 7.821 7.821 0 0 1-2.207-5.453c0-6.132 5.799-11.25 7.527-12.643 1.728 1.393 7.527 6.51 7.527 12.643a7.821 7.821 0 0 1-2.207 5.453 7.444 7.444 0 0 1-5.32 2.262Zm5.843-6.714a6.223 6.223 0 0 1-1.67 3.277 5.975 5.975 0 0 1-3.198 1.71.826.826 0 0 1-.705-.215.872.872 0 0 1-.094-1.157.832.832 0 0 1 .522-.318c1.733-.3 3.203-1.805 3.496-3.584a.86.86 0 0 1 .341-.556.82.82 0 0 1 1.167.203c.128.186.18.416.142.64h-.001Z" />
    </Svg>
  )
}

export default function HydrationIcon({ isActive }: IconProps) {
  return (
    <>
      <HydrationSVG fill={
        isActive ?
          "dark:fill-spring-950"
          :
          "fill-spring-800 dark:fill-spring-200"
      }>
      </HydrationSVG>
    </>
  )
}

