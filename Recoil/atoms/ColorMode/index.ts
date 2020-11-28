import { atom } from "recoil";

export const colorModeAtom = atom({
    key: 'colorModeAtom', // unique ID (with respect to other atoms/selectors)
    default: true, // default value (aka initial value)
  });