import { StyleProp, ViewStyle } from "react-native";
import { FormFactor } from "../types/FormFactor";
import getFormFactor from "../util/getFormFactor";

const formFactor: FormFactor = getFormFactor();

const MainScrolLViewStyle: StyleProp<ViewStyle> =
  formFactor === "lg" ?
    {
      alignItems: "center",
      justifyContent: "center",
      gap: 48,
    }
    :
    formFactor === "md" ?
      {
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
      }
      :
      {
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
      }

export default MainScrolLViewStyle;
