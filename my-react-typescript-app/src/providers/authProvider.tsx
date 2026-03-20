import { useState, useEffect, useCallback, type ReactNode } from "react";
import { authService } from "../services/authService";
import { AuthContext } from "../contexts/AuthContext";
import type { LoginDto, User, RegisterDto } from "../types/auth";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Cek session saat app pertama load
  useEffect(() => {
    const initAuth = async () => {
      try {
        if (authService.isAuthenticated()) {
          // Ambil data terbaru dari backend
          const currentUser = await authService.getMe();
          setUser(currentUser);
          localStorage.setItem("user", JSON.stringify(currentUser));
        }
      } catch {
        // Token invalid → bersihkan
        localStorage.clear();
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = useCallback(async (dto: LoginDto) => {
    const response = await authService.login(dto);
    setUser(response.user);
  }, []);

  const register = useCallback(async (dto: RegisterDto) => {
    await authService.register(dto);
    // Tidak auto login setelah register — arahkan ke login page
  }, []);

  const logout = useCallback(async () => {
    await authService.logout();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
