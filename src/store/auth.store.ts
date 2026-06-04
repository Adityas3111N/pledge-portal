import { create } from "zustand";

interface AuthState {
  user: Record<string, unknown> | null;
  token: string | null;
  setUser: (user: Record<string, unknown>, token: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  setUser: (user, token) => set({ user, token }),
  logout: () => set({ user: null, token: null }),
}));
