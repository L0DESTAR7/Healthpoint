import { Dimensions } from "react-native";
import { FormFactor } from "../types/FormFactor";

export default function getFormFactor(): FormFactor {
  const dim = Dimensions.get("window");
  const width = dim.width;
  const formFactor: FormFactor = width > 900 ? FormFactor.lg : (width > 430 ? FormFactor.md : FormFactor.sm);
  return formFactor;
}
