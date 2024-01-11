import { atom } from "jotai";
import InsulinLog from "../../../types/data/InsulinLog";

const insulinLogAtom = atom<InsulinLog>(
  {
    value: 120,
    unit: "Unit",
    date: new Date(),
    type: "fast"
  }
);

export default insulinLogAtom;
