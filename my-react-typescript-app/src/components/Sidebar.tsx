import { Link, NavLink } from "react-router";
import { LayoutDashboard, Users, Folder, ShoppingCart, Package, Settings, LogOut, X } from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/dashboard", exact: true },
  { id: "users", label: "Users", icon: Users, path: "/dashboard/users" },
  { id: "categories", label: "Categories", icon: Folder, path: "/dashboard/category" },
  { id: "orders", label: "Orders", icon: ShoppingCart, path: "/dashboard/orders" },
  { id: "products", label: "Products", icon: Package, path: "/dashboard/products" },
  { id: "settings", label: "Settings", icon: Settings, path: "/dashboard/settings" },
];

interface SidebarProps {
  onClose: () => void;
  isOpen: boolean;
  namaBisnis?: string;
}

const Sidebar = ({ onClose, isOpen, namaBisnis }: SidebarProps) => {
  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 w-56 bg-neutral-950 flex flex-col z-30 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
    >
      <div className="px-6 pt-7 pb-7 border-b border-neutral-800 flex items-center justify-between">
        <div>
          <p className="text-white font-bold text-lg tracking-tight">{namaBisnis ?? "Nama Bisnis"}</p>
          <span className="mt-1 inline-block text-indigo-400 bg-indigo-400/10 text-xs font-medium px-2 py-0.5 rounded-full uppercase tracking-wide">Admin</span>
        </div>
        <button className="lg:hidden text-neutral-500 hover:text-white transition-colors p-1" onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      <nav className="flex-1 px-3 py-5 flex flex-col gap-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink key={item.id} to={item.path} end={item.exact} onClick={onClose}>
              {({ isActive }) => (
                <div
                  className={`flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg text-sm transition-colors duration-150
                  ${isActive ? "bg-neutral-800 text-white font-medium" : "text-neutral-500 hover:bg-neutral-800/60 hover:text-neutral-300"}`}
                >
                  <Icon size={15} className={isActive ? "text-indigo-400" : "opacity-50"} />
                  {item.label}
                </div>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="px-3 pt-4 pb-5 border-t border-neutral-800/60">
        <div className="flex items-center gap-2.5 bg-neutral-900 rounded-lg px-3 py-2.5">
          <div className="w-7 h-7 rounded-full bg-linear-to-br from-indigo-500 to-indigo-300 flex items-center justify-center text-white text-xs font-bold shrink-0">EX</div>
          <p className="text-neutral-500 text-xs truncate">example@gmail.com</p>
        </div>
        <Link to="/" className="flex items-center justify-center gap-1.5 mt-2 text-xs font-medium text-neutral-600 hover:text-red-400 hover:bg-red-400/5 rounded-md py-2 transition-colors duration-150 no-underline">
          <LogOut size={13} />
          Keluar
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
