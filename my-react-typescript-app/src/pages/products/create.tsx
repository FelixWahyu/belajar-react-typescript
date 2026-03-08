const CreateProduct = () => {
  return (
    <section>
      <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-md bg-white">
        <div className="mb-6">
          <h3 className="text-gray-800 text-2xl font-semibold">Tambah Produk Baru</h3>
        </div>
        <div>
          <form>
            <div className="mb-4 grid grid-cols-2 justify-between items-center gap-4">
              <div>
                <label htmlFor="product_name" className="text-gray-700 text-sm font-medium block">
                  Nama Product
                </label>
                <input
                  type="text"
                  id="product_name"
                  name="product_name"
                  className="px-3 py-1.5 mt-1 w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-1 focus:outline-blue-600 focus:border-blue-600 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="category" className="text-gray-700 text-sm font-medium block">
                  Kategori
                </label>
                <select name="category" id="category" className="px-3 py-1.5 mt-1 w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-1 focus:outline-blue-600 focus:border-blue-600 transition-all duration-300">
                  <option value="">-- Pilih kategori --</option>
                  <option value="makanan">Makanan Ringan</option>
                  <option value="minuman">Minuman</option>
                  <option value="atk">ATK</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 justify-between items-center mb-4 gap-4">
              <div>
                <label htmlFor="price" className="text-gray-700 text-sm font-medium block">
                  Harga
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  className="px-3 py-1.5 mt-1 w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-1 focus:outline-blue-600 focus:border-blue-600 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="image" className="text-gray-700 text-sm font-medium block">
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
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
                rows={4}
                cols={75}
                className="px-3 py-1.5 mt-1 w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-1 focus:outline-blue-600 focus:border-blue-600 transition-all duration-300"
              />
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
