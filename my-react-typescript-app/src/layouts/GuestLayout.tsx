import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";

const GuestLayout = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  if (isAuthenticated) return <Navigate to={"/dashboard"} replace />;

  return (
    <main className="min-h-screen">
      <Outlet />
    </main>
  );
};

export default GuestLayout;
