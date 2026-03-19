export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface User {
  id: string;
  name: string | null;
  username: string;
  email: string;
  role: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse {
  user: User;
  tokens: AuthTokens;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
