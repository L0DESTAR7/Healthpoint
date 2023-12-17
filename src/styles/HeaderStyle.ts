import { StyledProps } from "nativewind";
import { Animated, ViewStyle } from "react-native";
import getFormFactor from "../util/getFormFactor";

const formFactor = getFormFactor();

const headerStyle: Animated.WithAnimatedValue<StyledProps<ViewStyle>> =
  formFactor === "lg" ?
    {
      height: 128,
      elevation: 0,
      borderBottomWidth: 0,
      shadowOpacity: 0,
      backgroundColor: '#EDFFF8',
    }
    :
    formFactor === "md" ?
      {
        height: 96,
        elevation: 0,
        borderBottomWidth: 0,
        shadowOpacity: 0,
        backgroundColor: '#EDFFF8',
      }
      :
      {
        height: 80,
        elevation: 0,
        borderBottomWidth: 0,
        shadowOpacity: 0,
        backgroundColor: '#EDFFF8',
      }

export default headerStyle;
