import { Users2, DollarSign, ClipboardList, Boxes } from "lucide-react";
import { Link } from "react-router";
import { useMemo } from "react";

const stats = [
  { label: "Total User", value: "13", delta: "+2 minggu ini", accent: "bg-indigo-500", icon: Users2 },
  { label: "Revenue", value: "Rp 4.2M", delta: "+12% bulan ini", accent: "bg-emerald-500", icon: DollarSign },
  { label: "Orders", value: "87", delta: "+5 hari ini", accent: "bg-amber-500", icon: ClipboardList },
  { label: "Products", value: "34", delta: "2 stok habis", accent: "bg-red-500", icon: Boxes },
];

const recentActivity = [
  { name: "Budi Santoso", action: "Mendaftar akun baru", time: "2 menit lalu", avatar: "BS" },
  { name: "Siti Rahma", action: "Melakukan pemesanan #0087", time: "15 menit lalu", avatar: "SR" },
  { name: "Andi Wijaya", action: "Update profil pengguna", time: "1 jam lalu", avatar: "AW" },
  { name: "Dewi Lestari", action: "Pembayaran dikonfirmasi", time: "3 jam lalu", avatar: "DL" },
];

const quickStats = [
  { label: "User Aktif", val: "87%", pct: 87 },
  { label: "Order Selesai", val: "72%", pct: 72 },
  { label: "Kepuasan", val: "94%", pct: 94 },
  { label: "Stok Tersedia", val: "61%", pct: 61 },
  { label: "Target Bulanan", val: "48%", pct: 48 },
];

const DashboardPage = () => {
  const formatDate = useMemo(() => new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" }), []);

  return (
    <section>
      <header className="flex items-end justify-between mb-6 lg:mb-9">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight leading-none">Dashboard</h1>
          <p className="text-sm text-neutral-400 mt-1">Selamat datang kembali</p>
        </div>
        <div className="hidden sm:block text-xs font-medium text-neutral-500 bg-stone-200 px-4 py-1.5 rounded-full whitespace-nowrap">{formatDate}</div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white rounded-2xl border border-stone-200 pt-5 px-5 pb-4 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${s.accent}`} />
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">{s.label}</p>
                <Icon size={15} className="text-neutral-300" />
              </div>
              <p className="text-3xl font-bold text-neutral-900 tracking-tight leading-none mb-2">{s.value}</p>
              <p className="text-xs text-neutral-400">{s.delta}</p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-4 lg:grid lg:gap-5 lg:grid-cols-[1fr_320px]">
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
          <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-stone-100">
            <span className="text-sm font-bold text-neutral-800 tracking-tight">Aktivitas Terbaru</span>
            <Link to={"/activity"} className="text-xs font-medium text-indigo-500 no-underline hover:text-indigo-700 transition-colors">
              Lihat semua
            </Link>
          </div>
          <div className="py-2">
            {recentActivity.map((a) => (
              <div key={a.name} className="flex items-center gap-3 px-5 py-3 hover:bg-stone-50 transition-colors duration-100">
                <div className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center text-xs font-bold text-neutral-600 shrink-0">{a.avatar}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-neutral-800">{a.name}</p>
                  <p className="text-xs text-neutral-400 truncate">{a.action}</p>
                </div>
                <span className="text-xs text-neutral-300 whitespace-nowrap hidden sm:block">{a.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-5 pt-5 pb-4 border-b border-stone-100">
            <span className="text-sm font-bold text-neutral-800 tracking-tight">Ringkasan</span>
          </div>
          <div>
            {quickStats.map((q, i) => (
              <div key={q.label} className={`flex items-center justify-between gap-3 px-5 py-3.5 ${i < quickStats.length - 1 ? "border-b border-stone-100" : ""}`}>
                <span className="text-sm text-neutral-500 w-28 shrink-0">{q.label}</span>
                <div className="flex-1 h-1 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${q.pct}%` }} />
                </div>
                <span className="text-sm font-semibold text-neutral-800 w-10 text-right">{q.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
