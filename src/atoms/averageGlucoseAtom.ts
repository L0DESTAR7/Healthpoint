import { atom } from "jotai";
import GlucoseLog from "../types/data/GlucoseLog";

const averageGlucoseAtom = atom<GlucoseLog>(
  {
    value: 155,
    unit: "mg/dL"
  }
);

export default averageGlucoseAtom;
