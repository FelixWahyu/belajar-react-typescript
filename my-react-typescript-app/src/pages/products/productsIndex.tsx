import { Link } from "react-router";

const ProductPage = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <div className="px-6 py-2 flex justify-between items-center mb-6">
        <h3 className="text-xl text-gray-800 font-semibold">Halaman Product</h3>
        <Link to={"/dashboard/create"} className="px-4 py-1 flex items-center justify-center rounded-lg bg-blue-500 text-white hover:bg-blue-600">
          + Tambah
        </Link>
      </div>
      <div className="max-w-5xl mx-auto overflow-x-auto rounded-lg shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr className="text-sm font-bold text-gray-800">
              <td className="px-4 py-2 text-center">No</td>
              <td className="px-4 py-2 text-left">Gambar</td>
              <td className="px-4 py-2 text-left">Nama Produk</td>
              <td className="px-4 py-2 text-left">Kategori</td>
              <td className="px-4 py-2 text-left">Harga</td>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm text-gray-700 font-medium bg-white hover:bg-gray-50">
              <td className="px-4 py-2 text-center">1</td>
              <td className="px-4 py-2 text-left">gamabr minuman</td>
              <td className="px-4 py-2 text-left">teh gelas</td>
              <td className="px-4 py-2 text-left">minuman</td>
              <td className="px-4 py-2 text-left">2500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductPage;
