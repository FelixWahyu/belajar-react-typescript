import { Menu } from "lucide-react";
import { useState, type ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";

interface MainLayoutProps {
  children?: ReactNode;
  namaBisnis?: string;
}

const MainLayout = ({ namaBisnis }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-stone-100">
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <Sidebar namaBisnis="Toko Sembako" onClose={() => setSidebarOpen(false)} isOpen={sidebarOpen} />

      <div className="flex flex-col flex-1 lg:ml-56 min-w-0">
        <header className="lg:hidden sticky top-0 z-10 bg-white border-b border-stone-200 flex items-center gap-3 px-4 py-3">
          <button onClick={() => setSidebarOpen(true)} className="text-neutral-600 hover:text-neutral-900 transition-colors">
            <Menu size={20} />
          </button>
          <p className="font-bold text-sm text-neutral-800 tracking-tight">{namaBisnis ?? "Nama Bisnis"}</p>
        </header>

        <main className="flex-1 px-4 py-6 sm:px-6 sm:py-7 lg:px-10 lg:py-9">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
