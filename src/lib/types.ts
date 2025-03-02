export interface AuthState {
  isAuthenticated: boolean;
  user: { email: string; username: string } | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export interface UseAuth {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}
