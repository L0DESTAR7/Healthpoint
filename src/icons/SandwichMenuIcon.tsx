import { styled } from "nativewind";
import { Path, Svg } from "react-native-svg";
import getFormFactor from "../util/getFormFactor";
import { IconProps } from "../types/IconProps";

const StyledPath = styled(Path, { classProps: ["fill", "stroke"] })

function SandwichMenuSVG({ fill, ...props }: any) {

  const formFactor = getFormFactor();
  console.log("[SandwichMenuIcon.tsx]: formFactor = " + formFactor + ", fill = " + fill);

  return (
    <Svg
      viewBox="0 0 50 40"
      width={formFactor === "lg" ? 65 : (formFactor === "md" ? 32 : 21)}
      height={formFactor === "lg" ? 49 : (formFactor === "md" ? 24 : 16)}>
      <StyledPath fill={fill} d="M45.352 17a1.889 1.889 0 0 1-1.89 1.889H1.89a1.89 1.89 0 1 1 0-3.778h41.572A1.89 1.89 0 0 1 45.352 17ZM1.89 3.778h41.572A1.89 1.89 0 0 0 44.798.553 1.89 1.89 0 0 0 43.462 0H1.89a1.89 1.89 0 1 0 0 3.778Zm41.572 26.444H1.89a1.89 1.89 0 1 0 0 3.778h41.572a1.89 1.89 0 0 0 1.336-3.224 1.89 1.89 0 0 0-1.336-.554Z" />
    </Svg>
  )
}

export default function SandwichMenuIcon({ isActive }: IconProps) {
  return (
    <>
      <SandwichMenuSVG fill={"fill-spring-500"}>
      </SandwichMenuSVG>
    </>
  )
}

