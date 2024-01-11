import { atom } from "jotai";

const initDate = new Date();

const glucoseDateTimeAtom = atom<Date>(initDate);

export default glucoseDateTimeAtom;
