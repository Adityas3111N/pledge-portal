import { create } from "zustand";

interface UIState {
  isSearchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSearchOpen: false,
  setSearchOpen: (open) => set({ isSearchOpen: open }),
}));
