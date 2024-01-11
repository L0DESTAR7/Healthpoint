import { atom } from "jotai";

const insulinTypeMenuAtom = atom<"basal" | "fast">("fast");

export default insulinTypeMenuAtom;
