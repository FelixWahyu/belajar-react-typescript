import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";

interface ProtectedRouteProps {
  requiredRole?: string;
}

export const ProtectedRoute = ({ requiredRole }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading, user } = useAuth();
  const location = useLocation();

  // Tunggu sampai auth selesai dicek
  if (isLoading) {
    return <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>Loading...</div>;
  }

  // Belum login → redirect ke login, simpan halaman asal
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Role tidak sesuai
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/forbidden" replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
