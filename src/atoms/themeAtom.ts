import { atom } from "jotai";
import { ColorSchemeName } from "nativewind/dist/style-sheet/color-scheme";

const themeAtom = atom<ColorSchemeName>('dark');

export default themeAtom;
