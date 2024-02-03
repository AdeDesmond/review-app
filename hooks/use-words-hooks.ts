import { create } from "zustand";

interface WordState {
  selectWord: string;
  getWords: (word: string) => void;
}

export const useWordStore = create<WordState>()((set) => ({
  selectWord: "",
  getWords: (word: string) => set((state) => ({ selectWord: word })),
}));
