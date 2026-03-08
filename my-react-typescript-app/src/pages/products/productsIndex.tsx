import { Link } from "react-router";

const ProductPage = () => {
  return (
    <section>
      <div className="px-6 py-2 bg-white rounded-lg shadow-sm flex justify-between items-center">
        <h3 className="text-lg text-gray-800 font-semibold">Halaman Product</h3>
        <Link to={"/dashboard/create"} className="px-4 py-1 flex items-center justify-center rounded-lg bg-blue-500 text-white hover:bg-blue-600">
          + Tambah
        </Link>
      </div>
    </section>
  );
};

export default ProductPage;
