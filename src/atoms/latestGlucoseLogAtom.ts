import { atom } from "jotai";
import GlucoseLog from "../types/data/GlucoseLog";

const latestGlucoseLogAtom = atom<GlucoseLog>(
  {
    value: 10, unit: "mg/dL", date: new Date()
  }
);
export default latestGlucoseLogAtom;
