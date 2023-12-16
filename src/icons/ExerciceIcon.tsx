import { styled } from "nativewind";
import { Path, Svg } from "react-native-svg";
import getFormFactor from "../util/getFormFactor";
import { IconProps } from "../types/IconProps";

const StyledPath = styled(Path, { classProps: ["fill", "stroke"] })

function ExerciceSVG({ fill, ...props }: any) {

  const formFactor = getFormFactor();
  console.log("[ExerciceIcon.tsx]: formFactor = " + formFactor + ", fill = " + fill);

  return (
    <Svg
      viewBox="0 0 18 24"
      width={formFactor === "lg" ? 48 : (formFactor === "md" ? 28 : 19)}
      height={formFactor === "lg" ? 36 : (formFactor === "md" ? 24 : 16)}>
      <StyledPath fill={fill} d="M12.9 5.4a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4ZM7.476 7.97c-.749.185-1.26.465-1.671.812-.619.52-1.117 1.272-1.792 2.452a1.2 1.2 0 1 1-2.084-1.19C2.6 8.868 3.28 7.77 4.26 6.946 5.28 6.085 6.532 5.597 8.22 5.409c.705-.078 1.481-.062 2.21.263.764.34 1.321.952 1.702 1.77.512 1.1.893 1.754 1.198 2.134.147.182.25.266.308.304.046.03.065.033.073.034.053.006.222 0 .719-.22.216-.096.453-.212.742-.353l.069-.034c.313-.152.67-.326 1.07-.504a1.2 1.2 0 0 1 .975 2.193c-.357.16-.682.316-.992.468l-.078.038c-.277.135-.555.271-.816.387-.54.239-1.23.498-1.979.407-.789-.096-1.398-.541-1.898-1.14l-1.64 3.164 2.267 2.951c.136.176.22.386.242.607l.5 4.798a1.2 1.2 0 0 1-2.387.248l-.464-4.46-1.378-1.792-.011.022-.051-.103-2.546-3.313a1.2 1.2 0 0 1-.169-1.16l1.589-4.149Z" />
      <StyledPath fill={fill} d="m5.659 15.004-.883 2.376-3.48-.276a1.2 1.2 0 1 0-.191 2.392l4.385.349a1.2 1.2 0 0 0 1.22-.778l.675-1.817-1.726-2.246Z" />
    </Svg>
  )
}

export default function ExerciceIcon({ isActive }: IconProps) {
  return (
    <>
      <ExerciceSVG fill={
        isActive ?
          "dark:fill-spring-950"
          :
          "fill-spring-800 dark:fill-spring-200"
      }>
      </ExerciceSVG>
    </>
  )
}

