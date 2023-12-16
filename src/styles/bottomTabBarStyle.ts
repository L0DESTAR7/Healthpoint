import { Animated, StyleProp, ViewStyle } from "react-native";
import getFormFactor from "../util/getFormFactor";
import { FormFactor } from "../types/FormFactor";

const formFactor: FormFactor = getFormFactor();

const bottomTabBarStyle: Animated.WithAnimatedValue<StyleProp<ViewStyle>> =
  formFactor === "lg" ?
    {
      height: 100,
      flex: 1,
      position: 'absolute',
      left: 69,
      right: 69,
      bottom: 26,
      borderRadius: 24,
      elevation: 0,
      borderTopWidth: 0,
      backgroundColor: '#D5FFF0',
      alignItems: "center",
    }
    :
    formFactor === "md" ?
      {
        height: 64,
        position: 'absolute',
        left: 36,
        right: 36,
        bottom: 20,
        borderRadius: 16,
        elevation: 0,
        borderTopWidth: 0,
        backgroundColor: '#D5FFF0',
        alignItems: "center",
      }
      :
      {
        height: 50,
        position: 'absolute',
        left: 30,
        right: 30,
        bottom: 16,
        borderRadius: 16,
        elevation: 0,
        borderTopWidth: 0,
        backgroundColor: '#D5FFF0',
        alignItems: "center",
      }


export default bottomTabBarStyle;
