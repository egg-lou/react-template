import { UseAuth } from "@/lib/types";
import useAuthStore from "@/stores/auth-store";

const useAuth = (): UseAuth => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  return { isAuthenticated, login, logout };
};

export default useAuth;
