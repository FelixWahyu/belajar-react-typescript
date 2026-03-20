import { useContext } from "react";
import { AuthContext, type AuthContextType } from "../contexts/AuthContext";

// Custom hook — tidak bisa dipakai di luar AuthProvider
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth harus dipakai di dalam AuthProvider");
  }
  return context;
};
