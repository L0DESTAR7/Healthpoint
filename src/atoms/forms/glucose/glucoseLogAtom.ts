import { atom } from "jotai";
import GlucoseLog from "../../../types/data/GlucoseLog";

const GlucoseLogAtom = atom<GlucoseLog>(
  {
    value: 120,
    unit: "mg/dL",
    date: new Date()
  }
);

export default GlucoseLogAtom;
