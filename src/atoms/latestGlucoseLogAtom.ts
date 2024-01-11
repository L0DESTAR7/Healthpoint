import { atom } from "jotai";
import GlucoseLog from "../types/data/GlucoseLog";

// NOTE: We need to subscribe to the latest database
// change on the appropriate collection.
// Upon change, we need to update this atom.
const latestGlucoseLogAtom = atom<GlucoseLog>(
  {
    value: 120, unit: "mg/dL", date: new Date()
  }
);

export default latestGlucoseLogAtom;
