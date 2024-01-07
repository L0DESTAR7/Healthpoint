import { atom } from "jotai";
import InsulinLog from "../types/data/InsulinLog";

const latestInsulinLogAtom = atom<InsulinLog>(
  {
    value: 10,
    unit: "Unit",
    type: "basal",
    date: new Date(),
  }
);
export default latestInsulinLogAtom;
