import { Outlet } from "react-router";

const GuestLayout = () => {
  return (
    <main className="min-h-screen">
      <Outlet />
    </main>
  );
};

export default GuestLayout;
