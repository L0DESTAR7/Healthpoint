import { atom } from "jotai";

const initDate = new Date();

const insulinDateTimeAtom = atom<Date>(initDate);

export default insulinDateTimeAtom;
