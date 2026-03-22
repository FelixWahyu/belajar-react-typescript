import { Link } from "react-router";
import { useUsers } from "../../hooks/useUsers";

const UserPage = () => {
  const { users, meta, loading, error, page, setPage, deleteUser } = useUsers();

  const handleDelete = async (id: string, name: string | null) => {
    const confirm = window.confirm(`Yakin hapus user "${name || "ini"}"?`);
    if (!confirm) return;
    await deleteUser(id);
  };

  return (
    <>
      <section className="bg-white rounded-lg shadow-sm p-6">
        <div className="px-6 py-2 flex justify-between items-center mb-6">
          <h3 className="text-xl text-gray-800 font-semibold">
            Halaman Product
            {meta && <span className="text-sm font-normal text-gray-500 ml-2">({meta.total}) Total</span>}
          </h3>
          <Link to={"/dashboard/create-product"} className="px-4 py-1 flex items-center justify-center rounded-lg bg-blue-500 text-white hover:bg-blue-600">
            + Tambah
          </Link>
        </div>
        {error && <div className="text-red-500 text-sm mb-4 p-3 bg-red-50 rounded-lg">{error}</div>}
        <div className="max-w-5xl mx-auto overflow-x-auto rounded-lg shadow-sm">
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr className="text-sm font-bold text-gray-800">
                <td className="px-4 py-2 text-center">No</td>
                <td className="px-4 py-2 text-left">Nama Lengkap</td>
                <td className="px-4 py-2 text-left">Email</td>
                <td className="px-4 py-2 text-left">Username</td>
                <td className="px-4 py-2 text-left">Role</td>
                <td className="px-4 py-2 text-left">Aksi</td>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                    Memuat data...
                  </td>
                </tr>
              )}
              {!loading && users.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                    Tidak ada data user
                  </td>
                </tr>
              )}
              {!loading &&
                users.map((user, index) => (
                  <tr key={user.id} className="text-sm text-gray-700 font-medium bg-white hover:bg-gray-50 border-b border-gray-100">
                    <td className="px-4 py-3 text-center">{(page - 1) * 10 + index + 1}</td>
                    <td className="px-4 py-3 text-left">{user.name || "-"}</td>
                    <td className="px-4 py-3 text-left">{user.email}</td>
                    <td className="px-4 py-3 text-left">{user.username}</td>
                    <td className="px-4 py-3 text-left">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${user.role === "admin" ? "bg-purple-100 text-purple-700" : "bg-green-100 text-green-700"}`}>{user.role}</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Link to={`/dashboard/users/${user.id}/edit`} className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200">
                          Edit
                        </Link>
                        <button onClick={() => handleDelete(user.id, user.name)} className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-lg hover:bg-red-200">
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {meta && meta.totalPages > 1 && (
          <div className="flex items-center justify-between mt-4 px-2">
            <p className="text-sm text-gray-500">
              Halaman {meta.page} dari {meta.totalPages}
            </p>
            <div className="flex gap-2">
              <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="px-3 py-1 text-sm border rounded-lg disabled:opacity-50 hover:bg-gray-50">
                ← Prev
              </button>
              <button onClick={() => setPage((p) => Math.min(meta.totalPages, p + 1))} disabled={page === meta.totalPages} className="px-3 py-1 text-sm border rounded-lg disabled:opacity-50 hover:bg-gray-50">
                Next →
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default UserPage;
