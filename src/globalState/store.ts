import { create } from "zustand";

interface Store {
  isCode: boolean;
  textCode: string;
  setTextCode: (textCode: string) => void;
  setIsCode: (isCode: boolean) => void;
}

export const useGlobalState = create<Store>()((set) => ({
  textCode: "",
  isCode: false,
  setIsCode: (isCode: boolean) => set({ isCode }),
  setTextCode: (textCode: string) => set({ textCode }),
}));
