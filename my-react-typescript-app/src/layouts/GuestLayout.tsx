import type { ReactNode } from "react";

interface GuestLayoutProps {
  children: ReactNode;
}

const GuestLayout = ({ children }: GuestLayoutProps) => {
  return <main className="min-h-screen">{children}</main>;
};

export default GuestLayout;
