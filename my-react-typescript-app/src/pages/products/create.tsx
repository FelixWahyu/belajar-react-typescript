import { useState } from "react";

type CreateProduct = {
  product_name: string;
  category: string;
  price: number | "";
  image?: File | null;
  description: string;
};

type ErrorsMsg = Partial<Record<keyof CreateProduct, string>>;

const CreateProduct = () => {
  const [form, setForm] = useState<CreateProduct>({
    product_name: "",
    category: "",
    image: null,
    price: "",
    description: "",
  });
  const [errors, setErrors] = useState<ErrorsMsg>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: name === "price" ? (value === "" ? "" : Number(value)) : value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    setForm((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const validate = () => {
    const newErrors: ErrorsMsg = {};

    if (!form.product_name) {
      newErrors.product_name = "Nama produk wajib diisi!";
    } else if (form.product_name.length < 3) {
      newErrors.product_name = "Nama produk minimal 3 karakter!";
    }

    if (!form.category) {
      newErrors.category = "Wajib pilih kategori produk!";
    }

    if (form.price === "" || form.price <= 0) {
      newErrors.price = "Harga harus lebih dari 0";
    }

    if (!form.description) {
      newErrors.description = "Deskripsi wajib diisi!";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmited = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    console.log(form);
  };

  return (
    <section>
      <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-md bg-white">
        <div className="mb-6">
          <h3 className="text-gray-800 text-2xl font-semibold">Tambah Produk Baru</h3>
        </div>
        <div>
          <form onSubmit={handleSubmited}>
            <div className="mb-4 grid grid-cols-2 justify-between items-center gap-4">
              <div>
                <label htmlFor="product_name" className="text-gray-700 text-sm font-medium block">
                  Nama Product
                </label>
                <input
                  type="text"
                  id="product_name"
                  name="product_name"
                  onChange={handleChange}
                  value={form.product_name}
                  className="px-3 py-1.5 mt-1 w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-1 focus:outline-blue-600 focus:border-blue-600 transition-all duration-300"
                />
                {errors.product_name && <p className="text-sm text-red-500">{errors.product_name}</p>}
              </div>
              <div>
                <label htmlFor="category" className="text-gray-700 text-sm font-medium block">
                  Kategori
                </label>
                <select
                  name="category"
                  id="category"
                  onChange={handleChange}
                  value={form.category}
                  className="px-3 py-1.5 mt-1 w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-1 focus:outline-blue-600 focus:border-blue-600 transition-all duration-300"
                >
                  <option value="">-- Pilih kategori --</option>
                  <option value="makanan">Makanan Ringan</option>
                  <option value="minuman">Minuman</option>
                  <option value="atk">ATK</option>
                </select>
                {errors.category && <p className="text-sm text-red-500">{errors.category}</p>}
              </div>
            </div>
            <div className="grid grid-cols-2 justify-between items-center mb-4 gap-4">
              <div>
                <label htmlFor="price" className="text-gray-700 text-sm font-medium block">
                  Harga
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  min="1"
                  onChange={handleChange}
                  value={form.price}
                  className="px-3 py-1.5 mt-1 w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-1 focus:outline-blue-600 focus:border-blue-600 transition-all duration-300"
                />
                {errors.price && <p className="text-sm text-red-500">{errors.price}</p>}
              </div>
              <div>
                <label htmlFor="image" className="text-gray-700 text-sm font-medium block">
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="px-3 py-1.5 mt-1 w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-1 focus:outline-blue-600 focus:border-blue-600 transition-all duration-300"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="text-gray-700 text-sm font-medium block">
                Deskripsi
              </label>
              <textarea
                id="description"
                name="description"
                onChange={handleChange}
                value={form.description}
                rows={4}
                cols={75}
                className="px-3 py-1.5 mt-1 w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-1 focus:outline-blue-600 focus:border-blue-600 transition-all duration-300"
              />
              {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
            </div>

            <div className="mt-3">
              <button type="submit" className="bg-blue-600 px-4 py-1.5 rounded-lg shadow-sm text-white font-medium cursor-pointer hover:bg-blue-700">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateProduct;
