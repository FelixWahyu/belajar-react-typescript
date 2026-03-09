import { useState } from "react";

const CreateCategory = () => {
  const [form, setForm] = useState<string>("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form || form === "") {
      setError("Nama kategori wajib diisi!");
      return;
    } else if (form.length < 3) {
      setError("Nama kategori minimal 3 karakter!");
      return;
    }

    setError("");
    console.log(form);
  };

  return (
    <section>
      <div className="max-w-3xl bg-white mx-auto p-6 rounded-md shadow-md">
        <div className="mb-6">
          <h3 className="text-2xl text-gray-800 font-semibold">Tambah Kategori Baru</h3>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="text-sm font-medium block text-gray-700">
                Nama Kategori
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setForm(e.target.value)}
                value={form}
                className="px-3 py-1.5 mt-1 w-full bg-gray-50 rounded-md border border-gray-300 shadow-sm focus:outline-1 focus:outline-blue-600 focus:border-blue-600 transition-all duration-300"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            <div className="mt-3">
              <button type="submit" className="px-4 py-1.5 bg-blue-600 cursor-pointer text-white font-semibold rounded-md shadow-sm hover:bg-blue-700">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateCategory;
