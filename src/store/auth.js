
import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

const useAuthStore = create((set, get) => ({
  token: null,
  refreshToken: null,
  usuario: null,

  setToken: (accessToken, refreshToken) => {
    const { usuario } = jwtDecode(accessToken);
    set({ token: accessToken, refreshToken, usuario });
  },

  clearAuth: () => set({ token: null, refreshToken: null, usuario: null }),

  isTokenExpired: () => {
    const token = get().token;
    if (!token) return true;
    try {
      const { exp } = jwtDecode(token);
      return exp < Date.now() / 1000;
    } catch {
      return true;
    }
  },

  refreshTokenManualmente: (novoToken) => {
    const { usuario } = jwtDecode(novoToken);
    set({ token: novoToken, usuario });
  }
}));

export default useAuthStore;
