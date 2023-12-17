import { StyledProps } from "nativewind";
import { Animated, ViewStyle } from "react-native";
import getFormFactor from "../util/getFormFactor";

const formFactor = getFormFactor();

const leftHeaderStyle: Animated.WithAnimatedValue<StyledProps<ViewStyle>> =
  formFactor === "lg" ?
    {
      paddingHorizontal: 65,
    }
    :
    formFactor === "md" ?
      {
        paddingHorizontal: 25,
      }
      :
      {
        paddingHorizontal: 25,
      }

export default leftHeaderStyle;
