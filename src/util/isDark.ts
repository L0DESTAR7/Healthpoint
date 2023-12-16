import { ColorSchemeName } from "nativewind/dist/style-sheet/color-scheme";

export default function isDark(theme: ColorSchemeName): boolean {
  return theme === "dark";
}
