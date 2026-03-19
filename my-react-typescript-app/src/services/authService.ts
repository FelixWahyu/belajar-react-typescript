import { api } from "../lib/axios";
import type { LoginDto, RegisterDto, AuthResponse, User, ApiResponse } from "../types/auth";

export const authService = {
  // Register
  register: async (dto: RegisterDto): Promise<AuthResponse> => {
    const { data } = await api.post<ApiResponse<AuthResponse>>("/auth/register", dto);
    return data.data;
  },

  // Login — simpan token otomatis
  login: async (dto: LoginDto): Promise<AuthResponse> => {
    const { data } = await api.post<ApiResponse<AuthResponse>>("/auth/login", dto);

    // ✅ Simpan token ke localStorage
    localStorage.setItem("accessToken", data.data.tokens.accessToken);
    localStorage.setItem("refreshToken", data.data.tokens.refreshToken);
    localStorage.setItem("user", JSON.stringify(data.data.user));

    return data.data;
  },

  // Get current user dari backend
  getMe: async (): Promise<User> => {
    const { data } = await api.get<ApiResponse<User>>("/auth/me");
    return data.data;
  },

  // Logout — hapus semua data lokal
  logout: async (): Promise<void> => {
    const refreshToken = localStorage.getItem("refreshToken");

    try {
      if (refreshToken) {
        await api.post("/auth/logout", { refreshToken });
      }
    } finally {
      // Selalu bersihkan localStorage meski request gagal
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
    }
  },

  // Cek apakah sudah login
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem("accessToken");
  },

  // Ambil user dari localStorage (tanpa request)
  getStoredUser: (): User | null => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },
};
