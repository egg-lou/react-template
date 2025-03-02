import { create } from "zustand";
import { setAuthCookie, getAuthCookie, removeAuthCookie } from "@/lib/utils";
import { AuthState } from "@/lib/types";

const testUser = {
  email: "test@example.com",
  password: "password123",
  username: "testUserCuteAko",
};

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: !!getAuthCookie(),
  user: null,
  login: async (email, password) => {
    if (email === testUser.email && password === testUser.password) {
      setAuthCookie("mock-token");
      set({
        isAuthenticated: true,
        user: { email: testUser.email, username: testUser.username },
      });
      return true;
    } else {
      set({ isAuthenticated: false, user: null });
      return false;
    }
  },
  logout: () => {
    removeAuthCookie();
    set({ isAuthenticated: false, user: null });
  },
}));

export default useAuthStore;
